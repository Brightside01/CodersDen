let challenge = '30 Days Of JavaScript'
console.log(challenge)

console.log(challenge.length)

console.log(challenge.toUpperCase())

console.log(challenge.toLowerCase())

console.log(challenge.substr(3,4))

console.log(challenge.substring(3,7))

console.log(challenge.substr(0,2))

console.log(challenge.includes('Script'))

console.log(challenge.split())

console.log(challenge.split(' '))

let eg = 'Facebook, Google, Mircosfot, Apple, IBM, Oracle, Amazon'

console.log(eg.split(' ,'))

console.log(challenge.replace('JavaScript','Python'))

console.log(challenge.charAt(15))

console.log(challenge.charCodeAt('J'))

console.log(challenge.indexOf('a'))

console.log(challenge.lastIndexOf('a'))

let sentence = 'You cannot end a sentence with because because because is a conjuction'

console.log(sentence.indexOf('because'))

console.log(sentence.lastIndexOf('because'))

console.log(sentence.search('because'))

console.log(challenge.trim())

console.log(challenge.startsWith(30))

console.log(challenge.endsWith('JavaScript'))

console.log(challenge.match('a'))

let days = '30 Days of'

console.log(days.concat(' JavaScript'))

console.log(challenge.repeat(2))

let quote = 'There is no exercise better for the heart than reaching down and lifting people up.'

console.log(quote)

let teresa = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log(teresa)

console.log('10' === 10)

/*console.log(Math.abs('10'))*/

let num = '10'

let NUM = 10

let numInt = +num

console.log(numInt === NUM)

console.log('9.8' === 10)

console.log(Math.round(9.81))

let on = 'Python'

let on_1 = 'Jargon'

console.log(on.includes('on'))

console.log(on_1.includes('on'))

let check = 'I hope this course is not full of jargon'

console.log(check.includes('jargon'))

let randonNum = Math.random()

let randonNum1 = Math.random(50)

let Number = randonNum *101

let Number1 = randonNum1 *101

let Number2 = randonNum *250

console.log(Number)

console.log(Number1)

console.log(Number2)

console.log(challenge.substr(11,10))

console.log('1 \t1 \t1 \t1 \t1')
console.log('2 \t1 \t2 \t4 \t8')
console.log('3 \t1 \t3 \t9 \t27')
console.log('4 \t1 \t4 \t16 \t64')
console.log('5 \t1 \t5 \t25 \t125')

console.log(sentence.substr(31,23))

let text = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'

let pattern = /love/gi

console.log(text.match(pattern))

let pattern_1 = /because/gi

console.log(sentence.match(pattern_1))

const sentence2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;.\
 The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple.\
;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate \
yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

sentence2.replace(/([@#$%])/g," ");

console.log(sentence2)

let text2 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let sum = text2.substr(9,4)

let sum1 = text2.substr(42,5)

let sum2 = text2.substr(67,5)

console.log(+sum + +sum1 + +sum2)
