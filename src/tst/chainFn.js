const calc = {
    total : 0,
    add : function(a){
        this.total += a
        return this
    },

    minus(m){
        this.total -= m
        return this  
    },

    multiply(mm){
        this.total *= mm
        return this  
    }
}

const res = calc.add(200).minus(100).multiply(3)

console.log(res.total)