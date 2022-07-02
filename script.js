const plus =  document.querySelector('#plus');
const minus =  document.querySelector('#minus');
const multi =  document.querySelector('#multi');
const division =  document.querySelector('#division');

const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');

class calculadora {
    #number1;
    #number2;
    constructor (number1,number2){
        this.#number1 = number1;
        this.#number2 = number2;
    }
    getPlus(){
        return this.#number1 + this.#number2;  
    }
    getMinus(){
        return this.#number1 - this.#number2;  
    }
    getMulti(){
        return this.#number1 * this.#number2;  
    }
    getDivision(){
        return this.#number1 / this.#number2;  
    }

}


plus.addEventListener('click', function(){
    const num1 = parseFloat(n1.value);
    const num2 = parseFloat(n2.value);
    const minus = new calculadora(num1, num2);
    document.querySelector('#resul').innerHTML = minus.getPlus();
})
minus.addEventListener('click', function(){
    const num1 = parseFloat(n1.value);
    const num2 = parseFloat(n2.value);
    const minus = new calculadora(num1, num2);
    document.querySelector('#resul').innerHTML = minus.getMinus();
})
multi.addEventListener('click', function(){
    const num1 = parseFloat(n1.value);
    const num2 = parseFloat(n2.value);
    const minus = new calculadora(num1, num2);
    document.querySelector('#resul').innerHTML = minus.getMulti();
})
division.addEventListener('click', function(){
    const num1 = parseFloat(n1.value);
    const num2 = parseFloat(n2.value);
    const minus = new calculadora(num1, num2);
    document.querySelector('#resul').innerHTML = minus.getDivision();
})

function limpar(){    
    n1.value = '';
    n2.value = '';
    document.querySelector('#resul').textContent = '';
}