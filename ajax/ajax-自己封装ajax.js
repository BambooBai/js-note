;(function anonymous(window){
    function AJAX(options){
        return new init(options);
    }
    let init=function init(options={}) {
        //=>init param
        let {
            url,
            method:'GET',
            data:null,
            dataType:'JSON',
            async=true,
            cache=true,
            error
        }=options;
        //=>mount:把配置项挂载到实例上
        ['url','method','data','dataType','async','cache','success','error'].forEach(item=>{
            this[item]=eval(item);
        });
        this.sendAjax();

    }
    AJAX.propotype={
        constructor:AJAX,
        init,
        //发送ajax请求
        sendAjax(){
            this.handleData();
            this.handleCache();
        }
    }
})(window)