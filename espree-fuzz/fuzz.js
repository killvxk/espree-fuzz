"use strict";
const Linter = require('eslint').Linter;
const linter = new Linter();
const espree = require("espree");
const fs = require("fs");

const child_process = require('child_process');
const exec = child_process.exec;
const execSync = child_process.execSync;


const testcaseDir = "./testcase-raw/";
const testcaseNormalizedDir = "./testcase-normalized/";
const testcaseOutputDir = "./testcase-output/";
const testcaseRunDir = "./testcase-run/";
const crashDir = "./crash/";
const binPath = "~/Desktop/webkit-dfc36ec-asan/bin/jsc";












/**
 * STEP 1, Statitical analysis towards "typed" "identifiers" appeard in testcases.
 * 
 * havent done any substitutions, just try some fix.
 */

let identifiersArray = require("./identifiers.js");
let typesArray = [];

function statiticalAnalysis(path) {
	let files = fs.readdirSync(path);
	for (let file of files) {
		let jsCode = fs.readFileSync(path + file, 'utf-8');
		try {
			let ast = espree.parse(jsCode, {
				ecmaVersion: 9, sourceType: "script", ecmaFeatures: {
					jsx: true,
					globalReturn: true,
					impliedStrict: false,
					experimentalObjectRestSpread: true
				}
			});
			//console.log('======================================================');
			//console.log(ast);
			function traverseNode(node) {
				for (let i in node) {
					let current = node[i];
					//console.log(current);
					if ((current == node) || (typeof current == "string") || (typeof current == "number") || current == null) { }
					else {
						if (current.hasOwnProperty("type")) {
							typesArray.push({
								type: current.type,
								code: jsCode.substring(current.start, current.end)
							});
							if (current.type == "Identifier") {
								let scalar = identifiersArray.filter(function (x) { if (x.oldName == current.name) return x; })[0];
								if (scalar != undefined) {
									++scalar.count;
								}
								else {
									identifiersArray.push({
										oldName: current.name,
										newName: 'o' + identifiersArray.length.toString(),
										count: 0
									});
								}
							}
						}
						traverseNode(current);
					}
				}
			}
			traverseNode(ast);
		} catch (e) {
			console.log('[+] Exception: ' + file + ':' + e);
			//console.log(linter.verifyAndFix(jsCode,{rules:{semi: 2}}));
		}
	}
}

statiticalAnalysis(testcaseDir);
/*for (let scalar of typesArray)
	console.log(scalar);
for (let scalar of identifiersArray)
	console.log(scalar);
*/


















/**
 * STEP 2, Substitutions, change the Identifiers using "start" "end" "oldName" "on". VERSION 2.
 * 
 * From testcase dir transport to testcase-normalized. Prepare a new types array.
 */
function substituteIdentifiers(pathI, pathO) {
	let files = fs.readdirSync(pathI);
	for (let file of files) {
		let jsCode = fs.readFileSync(pathI + file, 'utf-8');
		try {
			let ast = espree.parse(jsCode, {
				ecmaVersion: 9, sourceType: "script", ecmaFeatures: {
					jsx: true,
					globalReturn: true,
					impliedStrict: false,
					experimentalObjectRestSpread: true
				}
			});
			//console.log('======================================================');
			//console.log(ast);
			let toSubstituteIdentifiers = [];
			function traverseNode(node) {
				for (let i in node) {
					let current = node[i];
					//console.log(current);
					if ((current == node) || (typeof current == "string") || (typeof current == "number") || current == null) { }
					else {
						if (current.hasOwnProperty("type")) {
							typesArray.push({
								type: current.type,
								code: jsCode.substring(current.start, current.end)
							});
							if (current.type == "Identifier") {
								let scalar = identifiersArray.filter(function (x) { if (x.oldName == current.name) return x; })[0];
								//assert(scalar != undefined);
								toSubstituteIdentifiers.push({
									oldName: current.name,
									newName: scalar.newName,
									start: current.start,
									end: current.end
								});
							}
						}
						traverseNode(current);
					}
				}
			}
			traverseNode(ast);

			let orderIdentifiers = [];
			for (let scalar of toSubstituteIdentifiers) {
				if (orderIdentifiers.filter(function (x) { if (x.oldName == scalar.newName) return x; })[0] == undefined) {
					if ((scalar.newName[0] == 'o') && (scalar.newName[1] >= '0') && (scalar.newName[1] <= '9')) {
						orderIdentifiers.push({
							oldName: scalar.newName,
							newName: 'o' + orderIdentifiers.length.toString()
						});
					}
					else {
						orderIdentifiers.push({
							oldName: scalar.newName,
							newName: scalar.newName
						});
					}
				}
			}

			let newContent = "";
			let fp = 0;
			for (let scalar of toSubstituteIdentifiers) {
				newContent += jsCode.substring(fp, scalar.start);
				newContent += orderIdentifiers.filter(function (x) { if (x.oldName == scalar.newName) return x; })[0].newName;
				fp = scalar.end;
			}
			newContent += jsCode.substring(fp, jsCode.length);
			fs.writeFileSync(pathO + file, newContent);

		} catch (e) {
			console.log('[+] Exception: ' + file + ':' + e);
		}
	}
}

substituteIdentifiers(testcaseDir, testcaseNormalizedDir);

typesArray = [];
statiticalAnalysis(testcaseNormalizedDir);
//for (let scalar of typesArray)
//	console.log(scalar);













/**
 * STEP 4, randomly substitute everything from testcase-normalized dir.
 * 
 * ObjectExpression - ObjectExpression
 */
const typeObjectExpression = typesArray.filter(function (x) { if (x.type == 'ObjectExpression') return x; });
//console.log(typeObjectExpression);
const typeProperty = typesArray.filter(function (x) { if (x.type == 'Property') return x; });
const typeLiteral = typesArray.filter(function (x) { if (x.type == 'Literal') return x; });
const typeArrayExpression = typesArray.filter(function (x) { if (x.type == 'ArrayExpression') return x; });
const typeExpressionStatement = typesArray.filter(function (x) { if (x.type == 'ExpressionStatement') return x; });
const typeMemberExpression = typesArray.filter(function (x) { if (x.type == 'MemberExpression') return x; });
const typeAssignmentExpression = typesArray.filter(function (x) { if (x.type == 'AssignmentExpression') return x; });
const typeCallExpression = typesArray.filter(function (x) { if (x.type == 'CallExpression') return x; });
const typeVariableDeclarator = typesArray.filter(function (x) { if (x.type == 'VariableDeclarator') return x; });
const typeUnaryExpression = typesArray.filter(function (x) { if (x.type == 'UnaryExpression') return x; });
const typeArrowFunctionExpression = typesArray.filter(function (x) { if (x.type == 'ArrowFunctionExpression') return x; });

function randomlySubstitute(pathI, pathO) {
	let files = fs.readdirSync(pathI);
	for (let file of files) {
		let jsCode = fs.readFileSync(pathI + file, 'utf-8');
		try {
			let ast = espree.parse(jsCode, {
				ecmaVersion: 9, sourceType: "script", ecmaFeatures: {
					jsx: true,
					globalReturn: true,
					impliedStrict: false,
					experimentalObjectRestSpread: true
				}
			});
			//console.log('======================================================');
			//console.log(ast);
			let toSubstituteTypes = [];
			let mutated = false;
			function traverseNode(node) {
				for (let i in node) {
					let current = node[i];
					//console.log(current);
					if ((current == node) || (typeof current == "string") || (typeof current == "number") || current == null) { }
					else {
						if (current.hasOwnProperty("type")) {
							typesArray.push({
								type: current.type,
								code: jsCode.substring(current.start, current.end)
							});
							switch (current.type) {
								case 'ObjectExpression':
									if (probability0dot10()) {
										mutated = true;
										let randomScalar = typeObjectExpression[Math.floor((Math.random() * (typeObjectExpression.length + 1)) + 0)];
										toSubstituteTypes.push({
											start: current.start,
											end: current.end,
											code: randomScalar.code
										});
										continue;
									}
									break;

								case 'Property':
									if (probability0dot10()) {
										mutated = true;
										let randomScalar = typeProperty[Math.floor((Math.random() * (typeProperty.length + 1)) + 0)];
										toSubstituteTypes.push({
											start: current.start,
											end: current.end,
											code: randomScalar.code
										});
										continue;
									}
									break;
								case 'Literal':
									if (probability0dot10()) {
										mutated = true;
										let randomScalar = typeLiteral[Math.floor((Math.random() * (typeLiteral.length + 1)) + 0)];
										toSubstituteTypes.push({
											start: current.start,
											end: current.end,
											code: randomScalar.code
										});
										continue;
									}
									break;
								case 'ArrayExpression':
									if (probability0dot10()) {
										mutated = true;
										let randomScalar = typeArrayExpression[Math.floor((Math.random() * (typeArrayExpression.length + 1)) + 0)];
										toSubstituteTypes.push({
											start: current.start,
											end: current.end,
											code: randomScalar.code
										});
										continue;
									}
									break;
								case 'ExpressionStatement':
									if (probability0dot10()) {
										mutated = true;
										let randomScalar = typeExpressionStatement[Math.floor((Math.random() * (typeExpressionStatement.length + 1)) + 0)];
										toSubstituteTypes.push({
											start: current.start,
											end: current.end,
											code: randomScalar.code
										});
										continue;
									}
									break;
								case 'MemberExpression':
									if (probability0dot10()) {
										mutated = true;
										let randomScalar = typeMemberExpression[Math.floor((Math.random() * (typeMemberExpression.length + 1)) + 0)];
										toSubstituteTypes.push({
											start: current.start,
											end: current.end,
											code: randomScalar.code
										});
										continue;
									}
									break;
								case 'AssignmentExpression':
									if (probability0dot10()) {
										mutated = true;
										let randomScalar = typeAssignmentExpression[Math.floor((Math.random() * (typeAssignmentExpression.length + 1)) + 0)];
										toSubstituteTypes.push({
											start: current.start,
											end: current.end,
											code: randomScalar.code
										});
										continue;
									}
									break;
								case 'CallExpression':
									if (probability0dot10()) {
										mutated = true;
										let randomScalar = typeCallExpression[Math.floor((Math.random() * (typeCallExpression.length + 1)) + 0)];
										toSubstituteTypes.push({
											start: current.start,
											end: current.end,
											code: randomScalar.code
										});
										continue;
									}
									break;
								case 'VariableDeclarator':
									if (probability0dot10()) {
										mutated = true;
										let randomScalar = typeVariableDeclarator[Math.floor((Math.random() * (typeVariableDeclarator.length + 1)) + 0)];
										toSubstituteTypes.push({
											start: current.start,
											end: current.end,
											code: randomScalar.code
										});
										continue;
									}
									break;
								case 'UnaryExpression':
									if (probability0dot10()) {
										mutated = true;
										let randomScalar = typeUnaryExpression[Math.floor((Math.random() * (typeUnaryExpression.length + 1)) + 0)];
										toSubstituteTypes.push({
											start: current.start,
											end: current.end,
											code: randomScalar.code
										});
										continue;
									}
									break;
								case 'ArrowFunctionExpression':
									if (probability0dot10()) {
										mutated = true;
										let randomScalar = typeArrowFunctionExpression[Math.floor((Math.random() * (typeArrowFunctionExpression.length + 1)) + 0)];
										toSubstituteTypes.push({
											start: current.start,
											end: current.end,
											code: randomScalar.code
										});
										continue;
									}
									break;
								default:
									break;
							}
						}
						traverseNode(current);
					}
				}
			}
			traverseNode(ast);
			if (mutated == true) {
				let newContent = "";
				let fp = 0;
				for (let scalar of toSubstituteTypes) {
					newContent += jsCode.substring(fp, scalar.start);
					newContent += scalar.code;
					fp = scalar.end;
				}
				newContent += jsCode.substring(fp, jsCode.length);
				fs.writeFileSync(pathO + file.substring(0, file.length - 3) + randomString2() + '.js', newContent);
			}
		} catch (e) {
			if ((e.toString().indexOf('SyntaxError') != -1) || (e.toString().indexOf('TypeError') != -1)) {
				console.log('[+] Exception in randomlySubstitute : ' + file + ':' + e);
				exec('rm ' + pathI + file);
				console.log('[-] rm ' + pathI + file);
			}
			else if (e.toString().indexOf('ENOSPC') != -1) {
				console.log('[+] Exception in randomlySubstitute : ' + file + ':' + e);
				let cminI = pathO;
				let cminO = './cminO/'
				aflcmin(cminI, cminO);
				let files = fs.readdirSync(cminI);
				for (let file of files) {
					fs.unlinkSync(cminI + file);
				}
				files = fs.readdirSync(cminO);
				for (let file of files) {
					fs.copyFileSync(cminO + file, cminI + file);
				}
				files = fs.readdirSync(cminO);
				for (let file of files) {
					fs.unlinkSync(cminO + file);
				}
			}
			else {
				console.log('[+] Exception in randomlySubstitute : ' + file + ':' + e);
			}
		}
	}
}


















let files = fs.readdirSync(testcaseNormalizedDir);
for (let file of files) {
	fs.copyFileSync(testcaseNormalizedDir + file, testcaseOutputDir + file);
}

randomlySubstitute(testcaseNormalizedDir, testcaseOutputDir);
randomlySubstitute(testcaseNormalizedDir, testcaseOutputDir);
randomlySubstitute(testcaseNormalizedDir, testcaseOutputDir);
randomlySubstitute(testcaseNormalizedDir, testcaseOutputDir);
randomlySubstitute(testcaseOutputDir, testcaseOutputDir);
randomlySubstitute(testcaseOutputDir, testcaseOutputDir);
randomlySubstitute(testcaseOutputDir, testcaseOutputDir);
randomlySubstitute(testcaseOutputDir, testcaseOutputDir);

files = fs.readdirSync(testcaseOutputDir);
for (let file of files) {
	fs.copyFileSync(testcaseOutputDir + file, testcaseRunDir + file);
}
















/**
 * STEP 5 The fuzzing...with some ugly operations.
 */

const timeoutBigLoop = 0;
const timeoutSmallLoop = 0;

function loop() {
	exec('kill -9 $(pidof ' + binPath + ')');

	let files = fs.readdirSync(testcaseRunDir);

	let count = 0;
	let total = files.length;

	function runOne() {
		let file = files[count];
		if (count < total) {
			console.log('[+] node ./fuzz-child.js ' + testcaseRunDir + ' ' + file + ' ' + binPath + ' ' + crashDir + ' ' + testcaseOutputDir);

			try {
				let childSpawn = child_process.spawn('node', ['./fuzz-child.js', testcaseRunDir, file, binPath, crashDir, testcaseOutputDir],
					{ detached: true });

				childSpawn.on('error', (err) => { console.log('[-] Child process failed.\n' + err); count--; exec('kill -9 $(pidof ' + binPath + ')'); setTimeout(runOne, 6000); });
				childSpawn.on('close', (code) => { setTimeout(runOne, timeoutSmallLoop); });

				count++;
				if (count % 0x10 == 0)
					exec('kill -9 $(pidof ' + binPath + ')');
			} catch (e) {
				exec('kill -9 $(pidof ' + binPath + ')');
				setTimeout(runOne, 6000);
			}
		}
		else {
			setTimeout(loop, timeoutBigLoop);
		}
	}
	runOne(files);
	randomlySubstitute(testcaseOutputDir, testcaseRunDir);
}

loop();













































































































/**
 * Tools functions
 */
function randomString2() {
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var str = '';
	for (let i = 0; i < 2; i++) {
		str += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return str;
}

function probability0dot10() {
	if (Math.floor(Math.random() + 0.10))
		return true;
	else
		return false;
}


function aflcmin(pathI, pathO) {
	let aflcminExec = execSync(`afl-cmin -i ${pathI} -o ${pathO} -m 81920000 -t 6000 -- ${binPath} @@`);
	let cminLog = '';
	aflcminExec.stdout.on('data', function (data) {
		cminLog += data;
	});
	aflcminExec.stderr.on('data', function (data) {
		cminLog += data;
	});
	aflcminExec.on('exit', function (code, signal) {
		console.log(cminLog);
	});
}