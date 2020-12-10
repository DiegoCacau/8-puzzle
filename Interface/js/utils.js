if (!String.prototype.splice) {

    String.prototype.splice = function(n, newSubStr) {
        let elements = this.split(' ');
        let retn = elements[0];
        let cont = 1;

        if(elements.length > 9 && retn.length  == 1){
            retn = "0" + retn;
        }

        
        for(let i=1; i<N*N; i++){
            cont = cont + 1;

            if(elements.length > 9 && elements[i].length  == 1){
                retn = retn + " 0" + elements[i];
            }
            else{
                retn = retn + " " + elements[i];
            }

            if(cont == N){
                cont = 0;
                retn = retn + newSubStr;
            }

        }
        return retn;
    };
}
