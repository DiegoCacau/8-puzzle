if (!String.prototype.splice) {
    /**
     * {JSDoc}
     *
     * The splice() method changes the content of a string by removing a range of
     * characters and/or adding new characters.
     *
     * @this {String}
     * @param {number} start Index at which to start changing the string.
     * @param {number} delCount An integer indicating the number of old chars to remove.
     * @param {string} newSubStr The String that is spliced in.
     * @return {string} A new string with the spliced substring.
     */
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
