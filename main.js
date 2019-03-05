
$(document).ready(function(){
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/posts",
            success:function(data, status)
            {
                var arr = data;
    function createTable() {
        
        let previoustable = document.getElementById('dynamic_table');  //DYNAMIC TABLE.
        if(!!previoustable){
            previoustable.remove();
        }
        var table = document.createElement('table');
        table.setAttribute('id', 'table');
        
        var key = Object.keys(arr[0]);                                   //key and values
        var value = arr.map((elements)=>{
            return Object.values(elements);
        })

        
        var tr = document.createElement('tr'); 
        tr.setAttribute('id','tr')                           //header
        key.map((value, index) => {
            var th = document.createElement('th');
            th.innerHTML = key[index];
            th.setAttribute('class', 'tableClass1');
            th.setAttribute('id', key[index])
            tr.appendChild(th);
        })
        table.appendChild(tr);
        
                       
        arr.map((value, index1) => {
            var tr = document.createElement('tr');
            key.map((value, index2) => {
                var td = document.createElement('td');
                td.innerHTML = arr[index1][key[index2]];
                td.setAttribute('class', 'tableClass');
                tr.appendChild(td);
            })
        table.appendChild(tr);
        })
        document.body.appendChild(table);
        addEventsToColumns();
    }
    
createTable();
}
})
});