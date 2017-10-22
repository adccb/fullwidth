module.exports=str=>str.split('').map(i=>/^[A-z0-9]$/.test(i)?String.fromCharCode(i.charCodeAt(0)+65248):i).join('')
