// 1 eded daxil edin. Eger o eded 50den kicikdirse o edede qeder 3-e bolunen, 50-100 araligindadirsa o edede qeder 5e bolunen, 100den boyukdurse o edede qeder 8 e bolunen ededlerin sayini ekrana cixardan bir alqoritm yazin.

function number(num) {
    var count=0;
    for (let i=1; i<num; i++) {
        if (num<50 && i%3==0) {
            count++;
        }
        else if(num>50 && num<100 && i%5==0){
            count++;
        }
        else if(num>100 && i%8==0){
            count++;
        }
    }
    return count;
}
console.log(number(prompt()));