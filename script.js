 window.onload=()=>{
            const inputs = document.querySelectorAll('input');
            for(const input of inputs){
                input.value = localStorage[`input_${input.name}`] || '';
                input.addEventListener('change', function(){
                    localStorage[`input_${this.name}`] = this.value;
                });
            }
        };