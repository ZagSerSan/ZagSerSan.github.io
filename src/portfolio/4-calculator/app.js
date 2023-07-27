// переменные
	let title = document.getElementById('block-title')
	let output
	
	let temp = 0
	let saveNum
	
	let tempFirstStatus = true
	let tempQ = false

	let tempMult = false
	let tempMultPlus = false
	let tempMultMinus = false
	let saveMult
	let saveMultPlus
	let saveMultMinus

	let tempSplit = false
	let tempSplitPlus = false
	let tempSplitMinus = false
	let saveSplit
	let saveSplitPlus
	let saveSplitMinus

	let tempMinus = false
	let tempPlus = false
	let saveMinus
	let savePlus

	let numbers = []

	let tempOutput
	let outLast

let calculator = {
// input 1-9
	input0: function () {
		if (tempQ === true) {
			title.innerText = (title.innerText = '') + '0'
			temp = parseInt(title.innerText)
			saveNum = parseInt(temp)
			tempQ = false
		} else if (title.innerText === '0') {
			title.innerText = 0
			temp = 0
			saveNum = parseInt(temp)
		} else if (title.innerText === '-0') {
			title.innerText = 0
			temp = 0
			saveNum = parseInt(temp)
		} else {
			title.innerText += '0'
			temp += '0'
			saveNum = parseInt(temp)
		}
	},
	input1: function () {
		if (tempQ === true) {
			title.innerText = '1'
			temp = title.innerText
			saveNum = parseInt(temp)
			tempQ = false
		} else if (title.innerText === '0') {
			title.innerText = '1'
			temp = '1'
			saveNum = parseInt(temp)
		} else if (title.innerText === '-0') {
			title.innerText = '-1'
			temp = -1
			saveNum = parseInt(temp)
		} else {
			title.innerText += '1'
			temp += '1'
			saveNum = parseInt(temp)
		}
	},
	input2: function () {
		if (tempQ === true) {
			title.innerText = '2'
			temp = title.innerText
			saveNum = parseInt(temp)
			tempQ = false
		} else if (title.innerText === '0') {
			title.innerText = '2'
			temp = '2'
			saveNum = parseInt(temp)
		} else if (title.innerText === '-0') {
			title.innerText = '-2'
			temp = -2
			saveNum = parseInt(temp)
		} else {
			title.innerText += '2'
			temp += '2'
			saveNum = parseInt(temp)
		}
	},
	input3: function () {
		if (tempQ === true) {
			title.innerText = '3'
			temp = title.innerText
			saveNum = parseInt(temp)
			tempQ = false
		} else if (title.innerText === '0') {
			title.innerText = '3'
			temp = '3'
			saveNum = parseInt(temp)
		} else if (title.innerText === '-0') {
			title.innerText = '-3'
			temp = -3
			saveNum = parseInt(temp)
		} else {
			title.innerText += '3'
			temp += '3'
			saveNum = parseInt(temp)
		}
	},
	input4: function () {
		if (tempQ === true) {
			title.innerText = '4'
			temp = title.innerText
			saveNum = parseInt(temp)
			tempQ = false
		} else if (title.innerText === '0') {
			title.innerText = '4'
			temp = '4'
			saveNum = parseInt(temp)
		} else if (title.innerText === '-0') {
			title.innerText = '-4'
			temp = -4
			saveNum = parseInt(temp)
		} else {
			title.innerText += '4'
			temp += '4'
			saveNum = parseInt(temp)
		}
	},
	input5: function () {
		if (tempQ === true) {
			title.innerText = '5'
			temp = title.innerText
			saveNum = parseInt(temp)
			tempQ = false
		} else if (title.innerText === '0') {
			title.innerText = '5'
			temp = '5'
			saveNum = parseInt(temp)
		} else if (title.innerText === '-0') {
			title.innerText = '-5'
			temp = -5
			saveNum = parseInt(temp)
		} else {
			title.innerText += '5'
			temp += '5'
			saveNum = parseInt(temp)
		}
	},
	input6: function () {
		if (tempQ === true) {
			title.innerText = '6'
			temp = title.innerText
			saveNum = parseInt(temp)
			tempQ = false
		} else if (title.innerText === '0') {
			title.innerText = '6'
			temp = '6'
			saveNum = parseInt(temp)
		} else if (title.innerText === '-0') {
			title.innerText = '-6'
			temp = -6
			saveNum = parseInt(temp)
		} else {
			title.innerText += '6'
			temp += '6'
			saveNum = parseInt(temp)
		}
	},
	input7: function () {
		if (tempQ === true) {
			title.innerText = '7'
			temp = title.innerText
			saveNum = parseInt(temp)
			tempQ = false
		} else if (title.innerText === '0') {
			title.innerText = '7'
			temp = '7'
			saveNum = parseInt(temp)
		} else if (title.innerText === '-0') {
			title.innerText = '-7'
			temp = -7
			saveNum = parseInt(temp)
		} else {
			title.innerText += '7'
			temp += '7'
			saveNum = parseInt(temp)
		}
	},
	input8: function () {
		if (tempQ === true) {
			title.innerText = '8'
			temp = title.innerText
			saveNum = parseInt(temp)
			tempQ = false
		} else if (title.innerText === '0') {
			title.innerText = '8'
			temp = '8'
			saveNum = parseInt(temp)
		} else if (title.innerText === '-0') {
			title.innerText = '-8'
			temp = -8
			saveNum = parseInt(temp)
		} else {
			title.innerText += '8'

			temp += '8'
			saveNum = parseInt(temp)
		}
	},
	input9: function () {
		if (tempQ === true) {
			title.innerText = '9'
			temp = title.innerText
			saveNum = parseInt(temp)
			tempQ = false
		} else if (title.innerText === '0') {
			title.innerText = '9'
			
			temp = '9'
			saveNum = parseInt(temp)
		} else if (title.innerText === '-0') {
			title.innerText = '-9'
			temp = -9
			saveNum = parseInt(temp)
		} else {
			title.innerText += '9'
			temp += '9'
			saveNum = parseInt(temp)
		}
	},
// input cucl
	multiply: function () {
		if (title.innerText === '0') {
			title.innerText = '0'
		} else if (title.innerText === '-0') {
			title.innerText = '-0'
		} else if (title.innerText.endsWith('*') === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '*'
		} else if (title.innerText.endsWith('/') === true && tempSplit === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '*'
			tempSplit = false
			tempMult = true
		} else if (title.innerText.endsWith('-') === true && tempMinus === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '*'
			tempMinus = false
			tempMult = true
		} else if (title.innerText.endsWith('+') === true && tempPlus === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '*'
			tempPlus = false
			tempMult = true
		} else {
			if (tempQ === true) {
				numbers[numbers.length] = parseInt(title.innerText)
				temp = ''
				output = title.innerText + '*'
				title.innerText = output
				tempMult = true
				tempQ = false
			} else if (tempMult === true) {
				saveMult = numbers.pop()
				numbers[numbers.length] = (parseInt(saveMult) * parseInt(temp))
				temp = ''

				output = title.innerText + '*'
				title.innerText = output
				tempFirstStatus = false
			} else {
				if (tempSplit === true) {
					saveSplit = numbers.pop()
					numbers[numbers.length] = (parseInt(saveSplit) / parseInt(temp))
					temp = ''

					output = title.innerText + '*'
					title.innerText = output
		
					tempSplit = false
					tempMult = true
					tempFirstStatus = false
				} else if (tempMinus === true) {
					saveMultMinus = temp
					tempMultMinus = true
					temp = ''

					output = title.innerText + '*'
					title.innerText = output

					tempMinus = false
					tempMultMinus = true
					tempFirstStatus = false
				} else if (tempPlus === true) {
					saveMultPlus = temp
					temp = ''

					output = title.innerText + '*'
					title.innerText = output

					tempPlus = false
					tempMultPlus = true
					tempFirstStatus = false
				} else if (tempMultPlus === true) {
					saveMultPlus = parseInt(saveMultPlus) * parseInt(temp)
					temp = ''

					output = title.innerText + '*'
					title.innerText = output
					tempFirstStatus = false
				} else if (tempMultMinus === true) {
					saveMultMinus = parseInt(saveMultMinus) * parseInt(temp)
					temp = ''

					output = title.innerText + '*'
					title.innerText = output
					tempFirstStatus = false
				} else if (tempSplitPlus === true) {
					saveMultPlus = parseInt(saveSplitPlus) / parseInt(temp)
					temp = ''

					output = title.innerText + '*'
					title.innerText = output

					tempSplitPlus = false
					tempMultPlus = true
					tempFirstStatus = false
				} else if (tempSplitMinus === true) {
					saveMultMinus = parseInt(saveSplitMinus) / parseInt(temp)
					temp = ''

					output = title.innerText + '*'
					title.innerText = output

					tempSplitMinus = false
					tempMultMinus = true
					tempFirstStatus = false
				} else {
					numbers[numbers.length] = saveNum
					temp = ''

					output = title.innerText + '*'
					title.innerText = output

					tempMult = true
					tempMinus = false
					tempSplit = false
					tempFirstStatus = false
				}
			}
		}
	},
	split: function () {
		if (title.innerText === '0') {
			title.innerText = '0'
		} else if (title.innerText === '-0') {
			title.innerText = '-0'
		} else if (title.innerText.endsWith('/') === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '/'
		} else if (title.innerText.endsWith('*') === true && tempMult === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '/'
			tempMult = false
			tempSplit = true
		} else if (title.innerText.endsWith('-') === true && tempMinus === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '/'
			tempMinus = false
			tempSplit = true
		} else if (title.innerText.endsWith('+') === true && tempPlus === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '/'
			tempPlus = false
			tempSplit = true
		} else {
			if (tempQ === true) {
				numbers[numbers.length] = parseInt(title.innerText)
				temp = ''
				output = title.innerText + '/'
				title.innerText = output
				tempSplit = true
				tempQ = false
			} else if (tempSplit === true) {
				saveSplit = numbers.pop()
				numbers[numbers.length] = (parseInt(saveSplit) / parseInt(temp))
				temp = ''

				output = title.innerText + '/'
				title.innerText = output
				tempFirstStatus = false
			} else {
				if (tempMult === true) {
					saveMult = numbers.pop()
					numbers[numbers.length] = (parseInt(saveMult) * parseInt(temp))
					temp = ''

					output = title.innerText + '/'
					title.innerText = output

					tempMult = false
					tempSplit = true
					tempFirstStatus = false
				} else if (tempMinus === true) {
					saveSplitMinus = temp
					tempSplitMinus = true
					temp = ''

					output = title.innerText + '/'
					title.innerText = output

					tempMinus = false
					tempFirstStatus = false
				} else if (tempPlus === true) {
					saveSplitPlus = temp
					tempSplitPlus = true
					temp = ''

					output = title.innerText + '/'
					title.innerText = output

					tempPlus = false
					tempFirstStatus = false
				} else if (tempMultPlus === true) {
					saveSplitPlus = parseInt(saveMultPlus) * parseInt(temp)
					temp = ''

					output = title.innerText + '/'
					title.innerText = output

					tempMultPlus = false
					tempSplitPlus = true
					tempFirstStatus = false
				} else if (tempMultMinus === true) {
					saveSplitMinus = parseInt(saveMultMinus) * parseInt(temp)
					temp = ''

					output = title.innerText + '/'
					title.innerText = output

					tempMultMinus = false
					tempSplitMinus = true
					tempFirstStatus = false
				} else if (tempSplitPlus === true) {
					saveSplitPlus = parseInt(saveSplitPlus) / parseInt(temp)
					temp = ''

					output = title.innerText + '/'
					title.innerText = output
					tempFirstStatus = false
				} else if (tempSplitMinus === true) {
					saveSplitMinus = parseInt(saveSplitMinus) / parseInt(temp)
					temp = ''

					output = title.innerText + '/'
					title.innerText = output
					tempFirstStatus = false
				} else {
					numbers[numbers.length] = saveNum
					temp = ''

					output = title.innerText + '/'
					title.innerText = output

					tempMinus = false
					tempMult = false
					tempSplit = true
					tempFirstStatus = false
				}
			}
		}
	},
	minus: function () {
		if (title.innerText === '0') {
			title.innerText = '-0'
		} else if (title.innerText === '-0') {
			title.innerText = '0'
		} else if (title.innerText.endsWith('-') === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '-'
		} else if (title.innerText.endsWith('*') === true && tempMult === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '-'
			tempMult = false
			tempMinus = true
		} else if (title.innerText.endsWith('/') === true && tempSplit === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '-'
			tempSplit = false
			tempMinus = true
		} else if (title.innerText.endsWith('+') === true && tempPlus === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '-'
			tempPlus = false
			tempMinus = true
		} else {
			if (tempQ === true) {
				numbers[numbers.length] = parseInt(title.innerText)
				temp = ''
				output = title.innerText + '-'
				title.innerText = output
				tempMinus = true
				tempQ = false
			} else if (tempMinus === true) {
				saveMinus = numbers.pop()
				numbers[numbers.length] = (parseInt(saveMinus) - parseInt(temp))
				temp = ''

				output = title.innerText + '-'
				title.innerText = output
				tempFirstStatus = false
			} else {
				if (tempMult === true) {
					saveMult = numbers.pop()
					numbers[numbers.length] = (parseInt(saveMult) * parseInt(temp))
					temp = ''

					output = title.innerText + '-'
					title.innerText = output

					tempMult = false
					tempMinus = true
					tempFirstStatus = false
				} else if (tempSplit === true) {
					saveSplit = numbers.pop()
					numbers[numbers.length] = (parseInt(saveSplit) / parseInt(temp))
					temp = ''

					output = title.innerText + '-'
					title.innerText = output
		
					tempSplit = false
					tempMinus = true
					tempFirstStatus = false
				} else if (tempPlus === true) {
					savePlus = numbers.pop()
					numbers[numbers.length] = (parseInt(savePlus) + parseInt(temp))
					temp = ''

					output = title.innerText + '-'
					title.innerText = output

					tempPlus = false
					tempMinus = true
					tempFirstStatus = false
				} else if (tempMultPlus === true) {
					saveMult = numbers.pop()
					numbers[numbers.length] = (parseInt(saveMult) + (parseInt(saveMultPlus) * parseInt(temp)))
					temp = ''

					output = title.innerText + '-'
					title.innerText = output

					tempMultPlus = false
					tempMinus = true
					tempFirstStatus = false
				} else if (tempMultMinus === true) {
					saveMult = numbers.pop()
					numbers[numbers.length] = (parseInt(saveMult) - (parseInt(saveMultMinus) * parseInt(temp)))
					temp = ''

					output = title.innerText + '-'
					title.innerText = output

					tempMultMinus = false
					tempMinus = true
					tempFirstStatus = false
				} else if (tempSplitPlus === true) {
					saveSplit = numbers.pop()
					numbers[numbers.length] = (parseInt(saveSplit) + (parseInt(saveSplitPlus) / parseInt(temp)))
					temp = ''

					output = title.innerText + '-'
					title.innerText = output

					tempSplitPlus = false
					tempMinus = true
					tempFirstStatus = false
				} else if (tempSplitMinus === true) {
					saveSplit = numbers.pop()
					numbers[numbers.length] = (parseInt(saveSplit) - (parseInt(saveSplitMinus) / parseInt(temp)))
					temp = ''

					output = title.innerText + '-'
					title.innerText = output

					tempSplitMinus = false
					tempMinus = true
					tempFirstStatus = false
				} else {
					numbers[numbers.length] = saveNum
					temp = ''

					output = title.innerText + '-'
					title.innerText = output

					tempMinus = true
					tempFirstStatus = false
				}
			}
		}
	},
	plus: function () {
		if (title.innerText === '0') {
			title.innerText = '0'
		} else if (title.innerText === '-0') {
			title.innerText = '0'
		} else if (title.innerText.endsWith('+') === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '+'
		} else if (title.innerText.endsWith('*') === true && tempMult === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '+'
			tempMult = false
			tempPlus = true
		} else if (title.innerText.endsWith('/') === true && tempSplit === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '+'
			tempSplit = false
			tempPlus = true
		} else if (title.innerText.endsWith('-') === true && tempMinus === true) {
			title.innerText = ((title.innerText).substring(0, (title.innerText).length - 1)) + '+'
			tempMinus = false
			tempPlus = true
		} else {
			if (tempQ === true) {
				numbers[numbers.length] = parseInt(title.innerText)
				temp = ''
				output = title.innerText + '+'
				title.innerText = output
				tempPlus = true
				tempQ = false
			} else if (tempPlus === true) {
				savePlus = numbers.pop()
				numbers[numbers.length] = (parseInt(savePlus) + parseInt(temp))
				temp = ''

				output = title.innerText + '+'
				title.innerText = output
				tempFirstStatus = false
			} else {
				if (tempMult === true) {
					saveMult = numbers.pop()
					numbers[numbers.length] = (parseInt(saveMult) * parseInt(temp))
					temp = ''

					output = title.innerText + '+'
					title.innerText = output

					tempMult = false
					tempPlus = true
					tempFirstStatus = false
				} else if (tempSplit === true) {
					saveSplit = numbers.pop()
					numbers[numbers.length] = (parseInt(saveSplit) / parseInt(temp))
					temp = ''

					output = title.innerText + '+'
					title.innerText = output

					tempSplit = false
					tempPlus = true
					tempFirstStatus = false
				} else if (tempMinus === true) {
					saveMinus = numbers.pop()
					numbers[numbers.length] = (parseInt(saveMinus) - parseInt(temp))
					temp = ''

					output = title.innerText + '+'
					title.innerText = output

					tempMinus = false
					tempPlus = true
					tempFirstStatus = false
				} else if (tempMultPlus === true) {
					saveMult = numbers.pop()
					numbers[numbers.length] = (parseInt(saveMult) + (parseInt(saveMultPlus) * parseInt(temp)))
					temp = ''

					output = title.innerText + '+'
					title.innerText = output

					tempMultPlus = false
					tempPlus = true
					tempFirstStatus = false
				} else if (tempMultMinus === true) {
					saveMult = numbers.pop()
					numbers[numbers.length] = (parseInt(saveMult) - (parseInt(saveMultMinus) * parseInt(temp)))
					temp = ''

					output = title.innerText + '+'
					title.innerText = output

					tempMultMinus = false
					tempPlus = true
					tempFirstStatus = false
				} else if (tempSplitPlus === true) {
					saveSplit = numbers.pop()
					numbers[numbers.length] = (parseInt(saveSplit) + (parseInt(saveSplitPlus) / parseInt(temp)))
					temp = ''

					output = title.innerText + '+'
					title.innerText = output

					tempSplitPlus = false
					tempPlus = true
					tempFirstStatus = false
				} else if (tempSplitMinus === true) {
					saveSplit = numbers.pop()
					numbers[numbers.length] = (parseInt(saveSplit) - (parseInt(saveSplitMinus) / parseInt(temp)))
					temp = ''

					output = title.innerText + '+'
					title.innerText = output

					tempSplitMinus = false
					tempPlus = true
					tempFirstStatus = false
				} else {
					numbers[numbers.length] = parseInt(temp)
					temp = ''

					output = title.innerText + '+'
					title.innerText = output

					tempPlus = true
					tempFirstStatus = false
				}
			}
		}
	},
	del: function () {
		title.innerText = 0
		temp = 0
		saveNum = 0
		numbers.length=0

		tempMult = false
		tempMultPlus = false
		tempMultMinus = false

		tempSplit = false
		tempSplitPlus = false
		tempSplitMinus = false

		tempMinus = false
		tempPlus = false
	},
	back: function () {
		tempOutput = title.innerText
		outLast = tempOutput.slice(-1)

		if ((title.innerText).length === 1) {
			title.innerText = 0
			temp = 0
			saveNum = temp
		} else if (outLast === '*' || outLast === '/' || outLast === '-' || outLast === '+') {
			title.innerText = (title.innerText).substring(0, (title.innerText).length - 1)
			tempOutput = title.innerText
			outLast = tempOutput.slice(-1)

			for (outLast; outLast != '*' && outLast != '/' && outLast != '-' && outLast != '+' && outLast != ''; outLast = tempOutput.slice(-1)) {
				temp = outLast + temp
				saveNum = parseInt(temp)
				tempOutput = (tempOutput).substring(0, (tempOutput).length - 1)
				console.log('temp = ', temp)
			}

			if (outLast === '+' && tempMultPlus === false && tempSplitPlus === false) {
				numbers[0] -= parseInt(temp)
				tempMult = false
				tempSplit = false
				tempMinus = false
				tempMultPlus = false
				tempSplitPlus = false
				tempPlus = true
			} else if (outLast === '+' && tempMultPlus === true) {
				tempMult = false
				tempSplit = false
				tempMinus = false
				tempMultPlus = false
				tempSplitPlus = false
				tempPlus = true
			} else if (outLast === '+' && tempSplitPlus === false && tempMultPlus === false) {
				numbers[0] -= parseInt(temp)
				tempMult = false
				tempSplit = false
				tempMinus = false
				tempMultPlus = false
				tempSplitPlus = false
				tempPlus = true
			} else if (outLast === '+' && tempSplitPlus === true) {
				tempMult = false
				tempSplit = false
				tempMultPlus = false
				tempSplitPlus = false
				tempPlus = true
			} else if (outLast === '-' && tempMultMinus === false && tempSplitMinus === false) {
				// console.log('outLast = ', outLast)
				numbers[0] += parseInt(temp)
				tempMult = false
				tempSplit = false
				tempPlus = false
				tempMultMinus = false
				tempSplitMinus = false
				tempMinus = true
			} else if (outLast === '-' && tempMultMinus === true) {
				tempMult = false
				tempSplit = false
				tempPlus = false
				tempMultMinus = false
				tempSplitMinus = false
				tempMinus = true
			} else if (outLast === '-' && tempSplitMinus === false && tempMultMinus === false) {
				numbers[0] += parseInt(temp)
				tempMult = false
				tempSplit = false
				tempPlus = false
				tempMultMinus = false
				tempSplitMinus = false
				tempMinus = true
			} else if (outLast === '-' && tempSplitMinus === true) {
				tempMult = false
				tempSplit = false
				tempPlus = false
				tempMultMinus = false
				tempSplitMinus = false
				tempMinus = true
			} else if (outLast === '*') {
				// 2 + 2 * 4 '+ 2'
				// стираю '+', сканируется 4ка в temp, доходит до '*', outLast = '*'
				// если outLast === '*' (это тот блок кода где написаны эти коментарии)
				// то про просканировать следущее и 

				tempOutput = (tempOutput).substring(0, (tempOutput).length - 1)
				outLast = tempOutput.slice(-1)
				saveMult = ''

				for (outLast; outLast != '*' && outLast != '/' && outLast != '-' && outLast != '+' && outLast != ''; outLast = tempOutput.slice(-1)) {
					saveMult = parseInt(outLast + saveMult)
					tempOutput = (tempOutput).substring(0, (tempOutput).length - 1)
					console.log('saveMult = ', saveMult)
				}
				// если перед ним плюс
				if (outLast === '+') {
					// то это следущее засунуть в saveMult 
					// взять темп, умножить на следущее и отнять от number, 
					saveMultPlus = saveMult
					numbers[0] = numbers[0] - (saveMult * temp)
					console.log('numbers[0] = ',numbers)

					// включить состояние tempMultPlus
					tempSplit = false
					tempMinus = false
					tempPlus = false
					tempMult = false
					tempMultPlus = true
				}
				if (outLast === '-') {
					saveMultMinus = saveMult
					numbers[0] = numbers[0] + (saveMult * temp)
					tempSplit = false
					tempMinus = false
					tempPlus = false
					tempMult = false
					tempMultMinus = true
				}
			} else if (outLast === '/') {
				tempOutput = (tempOutput).substring(0, (tempOutput).length - 1)
				outLast = tempOutput.slice(-1)
				saveSplit = ''

				for (outLast; outLast != '*' && outLast != '/' && outLast != '-' && outLast != '+' && outLast != ''; outLast = tempOutput.slice(-1)) {
					saveSplit = parseInt(outLast + saveSplit)
					tempOutput = (tempOutput).substring(0, (tempOutput).length - 1)
					console.log('saveSplit = ', saveSplit)
				}
				// если перед ним плюс
				if (outLast === '+') {
					saveSplitPlus = saveSplit
					// то это следущее засунуть в saveSplit 
					// взять темп, умножить на следущее и отнять от number, 
					numbers[0] = numbers[0] - (saveSplit / temp)
					console.log('numbers[0] = ',numbers)

					// включить состояние tempMultPlus
					tempSplit = false
					tempMinus = false
					tempPlus = false
					tempMult = false
					tempSplitPlus = true
				}
				if (outLast === '-') {
					saveSplitMinus = saveSplit
					numbers[0] = numbers[0] + (saveSplit / temp)
					tempSplit = false
					tempMinus = false
					tempPlus = false
					tempMult = false
					tempSplitMinus = true
				}
			} else if (outLast === '') {
				numbers.length = 0
				tempMult = false
				tempSplit = false
				tempPlus = false
				tempMultPlus = false
				tempSplitPlus = false
				tempMinus = false
				tempFirstStatus = true
			}
		} else {
			title.innerText = (title.innerText).substring(0, (title.innerText).length - 1)
			tempOutput = title.innerText
			outLast = tempOutput.slice(-1)
			temp = (temp).substring(0, (temp).length - 1)
			saveNum = temp
		}
	},
	equally: function () {
		if (tempFirstStatus === true) {
			title.innerText = temp
		console.log('tempFirstStatus')
		} else if (tempQ === true) {
			title.innerText = temp
		} else {
			if (tempMult === true) {
				saveMult = numbers.pop()
				numbers[numbers.length] = (parseInt(saveMult) * parseInt(temp))
			} else if (tempMultPlus === true){
				saveMult = numbers.pop()
				numbers[numbers.length] =(parseInt(saveMultPlus) * parseInt(temp)) + parseInt(saveMult)
			} else if (tempMultMinus === true) {
				saveMult = numbers.pop()
				numbers[numbers.length] = parseInt(saveMult) - (parseInt(saveMultMinus) * parseInt(temp))
			} else if (tempSplit === true) {
				saveSplit = numbers.pop()
				numbers[numbers.length] = (parseInt(saveSplit) / parseInt(temp))
			} else if (tempSplitPlus === true) {
				saveSplit = numbers.pop()
				numbers[numbers.length] = parseInt(saveSplit) + (parseInt(saveSplitPlus) / parseInt(temp))
			} else if (tempSplitMinus === true) {
				saveSplit = numbers.pop()
				numbers[numbers.length] = parseInt(saveSplit) - (parseInt(saveSplitMinus) / parseInt(temp))
			} else if (tempPlus === true) {
				numbers[0] = numbers[0] + parseInt(temp)
			} else if (tempMinus === true) {
				numbers[0] = numbers[0] - parseInt(temp)
			} else {
				title.innerText = 0
			}
			title.innerText = numbers[0]
			console.log('tempFirstStatus else')
			tempQ = true

			temp = '0'
			saveNum = ''
			numbers.length=0

			tempMult = false
			tempMultPlus = false
			tempMultMinus = false

			tempSplit = false
			tempSplitPlus = false
			tempSplitMinus = false

			tempMinus = false
			tempPlus = false
		}
	}
}

// доступ и привязка к HTML 
	let btn0 = document.getElementById('btn0')
	btn0.addEventListener('click', calculator.input0)
	let btn1 = document.getElementById('btn1')
	btn1.addEventListener('click', calculator.input1)
	let btn2 = document.getElementById('btn2')
	btn2.addEventListener('click', calculator.input2)
	let btn3 = document.getElementById('btn3')
	btn3.addEventListener('click', calculator.input3)
	let btn4 = document.getElementById('btn4')
	btn4.addEventListener('click', calculator.input4)
	let btn5 = document.getElementById('btn5')
	btn5.addEventListener('click', calculator.input5)
	let btn6 = document.getElementById('btn6')
	btn6.addEventListener('click', calculator.input6)
	let btn7 = document.getElementById('btn7')
	btn7.addEventListener('click', calculator.input7)
	let btn8 = document.getElementById('btn8')
	btn8.addEventListener('click', calculator.input8)
	let btn9 = document.getElementById('btn9')
	btn9.addEventListener('click', calculator.input9)

	// +
	let btnPlus = document.getElementById('btnPlus')
	btnPlus.addEventListener('click', calculator.plus)
	// -
	let btnMinus = document.getElementById('btnMinus')
	btnMinus.addEventListener('click', calculator.minus)
	// C
	let btnC = document.getElementById('btnC')
	btnC.addEventListener('click', calculator.del)
	// <--
	let btnBack = document.getElementById('btnBack')
	btnBack.addEventListener('click', calculator.back)
	// *
	let btnMultiply = document.getElementById('btnMultiply')
	btnMultiply.addEventListener('click', calculator.multiply)
	// /
	let btnSplit = document.getElementById('btnSplit')
	btnSplit.addEventListener('click', calculator.split)
	// =
	let btnEqually = document.getElementById('btnEqually')
	btnEqually.addEventListener('click', calculator.equally)


