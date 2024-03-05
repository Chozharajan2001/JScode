//To count occurence of 1 in a binary value
//input "111010100010" output "6"
let num=0b111010100010;// only 12 digit input
let count=0;
for(i=0; i<12; i++){
    count= count+(num&1);
    //bitwise '&' is used to calculate 1
    num = num>>1;
    
    //right shifting one digit
}
console.log(count);

