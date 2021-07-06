//hsl(130 , 50% , 50% )             // color(0-360), saturation , lightness
class Color {
    constructor(r,g,b,name){
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    inner(){
        const {r,g,b} = this;
        return `${r},${g},${b}`;
    }
    rgb(){
        return `rgb(${this.inner()})`;       //do same but call it
    }
    rgba(a=1.0) {
        return `rgb(${this.inner()} , ${a} )`;
    }
    hex(){
        const {r,g,b} = this;
        return '#' + ( (1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
    }
    hsl(){
        let {r,g,b} = this;
        r /=255;
        g /=255;
        b /=255;
        let cmin = Math.min(r,g,b),
            cmax = Math.max(r,g,b),
            del = cmax-cmin,
            h=0,
            s=0,
            l=0;
        if (del == 0) {
            h=0;
        }else if (cmax == r) {
            h=((g-b)/del)%6;
        }else if (cmax == g) {
            h= (b-r)/del +2;
        }else{
            h=(r-g)/del +4;
        }

        h= Math.round(h*60);
        if(h<0) h+=30;

        l=(cmin+cmax)/2;
        s= del == 0 ? 0:del / (1-Math.abs(2*l - 1));
        this.h=h;
        this.s=s;
        this.l=l;
        return `hsl(${h},${Math.round(s*100)}%,${Math.round(l*100)}%)`;
    }
}

// class cat {
//     constructor(name , age){
//         this.name = name;
//         this.age = age;
//     }
//     meow(){
//         return 'meow';
//     }
// }
// class dog {
//     constructor(name , age){
//         this.name = name;
//         this.age = age;
//     }
//     bark(){
//         return 'bhow';
//     }
// }

//can be done as :
class pet{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
}
class cat extends pet {
    meow(){
        return 'meow';
    }
}

class dog extends pet{
    bark(){
        return 'bhow';
    }
}
//use pet constructor

class pet{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
}

class cat extends pet {
    constructor(name , age , life = 9){
        /*this.name = name;
        this.age = age;*/
        super(name,age);                //gives value to pet
        this.lives = life;
    }
    meow(){
        return 'meow';
    }
}

class dog extends pet{
    bark(){
        return 'bhow';
    }
}

const ass = new cat("sdjhh",23)

ass.meow()
"meow"

ass
//cat {name: "sdjhh", age: 23, lives: 9}age: 23lives: 9name: "sdjhh"__proto__: pet

const asse = new dog("sdjhh",23)

asse
//dog {name: "sdjhh", age: 23}age: 23name: "sdjhh"__proto__: