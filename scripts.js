// For stored the all item and price and quantity their index wise
var item = []
var all_itm_mrp = []        //for store MRP
var all_item_qunty = []
var all_price = []

// for Pen
var pen_quntty = [];      //store pen quantities
var tot_pen_prc = [];     //store pen price

// for Paper
var paper_quntty = [];      
var tot_paper_prc = [];

// for Pencil
var pencil_quntty = [];      
var tot_pencil_prc = [];

// for Eraser
var eraser_quntty = [];      
var tot_eraser_prc = [];

// for Bool
var book_quntty = [];      
var tot_book_prc = [];

// function for array element addition or add or sum
function sumof(arr){
    sum = 0
    for(a = 0; a < arr.length; a++){
        sum += arr[a]
    }
    return sum;
}

function add_item(){
    var tot_pen_qnty = 0
    var pen_sum = 0

    var tot_paper_qnty = 0
    var paper_sum = 0

    var tot_pencil_qnty = 0
    var pencil_sum = 0

    var tot_eraser_qnty = 0
    var eraser_sum = 0

    var tot_book_qnty = 0
    var book_sum = 0

    var cho = parseInt(document.getElementById('choise').value);
    var qunt = parseInt(document.getElementById('quant').value);
    if(cho>=1){
        if(qunt>=1){
            // Here the code
            // document.getElementById('warn').innerHTML = qunt;
            if(cho==1){
                var pen_prc = qunt * 2;
                //for add item on an array
                document.getElementById('itm').innerHTML = "Pen";
                if(!item.includes('Pen')){
                    item.push('Pen');
                    all_itm_mrp.push("2&#8377;")
                    // Create table row one time and their cell and id
                    var tbl = document.getElementById("showitem_d");
                    var row = tbl.insertRow();
                    var cell1 = row.insertCell();
                    var cell2 = row.insertCell();
                    var cell3 = row.insertCell();
                    cell1.id = "pen"
                    cell2.id = "pen_qun"
                    cell3.id = "pen_prc"
                    
                }

                // add pen quantity
                pen_quntty.push(qunt);
                for(var a = 0; a < pen_quntty.length; a++){
                    tot_pen_qnty += pen_quntty[a]
                }
                document.getElementById('qty').innerHTML = tot_pen_qnty;

                // pen actual price set in a div
                document.getElementById('prc').innerHTML = "2 &#8377;";

                // add pen price
                tot_pen_prc.push(pen_prc);
                for(var b = 0; b < tot_pen_prc.length; b++){
                    pen_sum += tot_pen_prc[b]
                }
                document.getElementById('tot').innerHTML = pen_sum+" &#8377;";

                //find item index and that store thier price and quantity in array that mean assign price and quantity thier index wise
                var index = item.indexOf('Pen');
                all_price[index]=pen_sum;
                all_item_qunty[index]=tot_pen_qnty;

                // update data using id in table
                document.getElementById("pen").innerHTML = item[index];
                document.getElementById("pen_qun").innerHTML = all_item_qunty[index];
                document.getElementById("pen_prc").innerHTML = all_price[index]+" &#8377;"

                // if(!item.includes('Pen')){
                //     var tbl = document.getElementById("showitem_d");
                //     var row = tbl.insertRow();
                //     var cell1 = row.insertCell();
                //     var cell2 = row.insertCell();
                //     var cell3 = row.insertCell();
                //     cell1.innerHTML = item[0]
                //     cell2.innerHTML = all_item_qunty[0]
                //     cell3.innerHTML = all_price[0]
                // }
                
                // display 
                document.getElementById('warn').innerHTML = "Add Sucessfully";
                var war = document.getElementById('warn');
                war.style.color = "green";

                //all_display
                document.getElementById('tot_itm').innerHTML = item.length;
                document.getElementById('tot_qnt').innerHTML = sumof(all_item_qunty);
                document.getElementById('tot_prc').innerHTML = sumof(all_price)+" &#8377;";
                
            }

            else if(cho==2){
                var paper_prc = qunt * 5;
                //for add item on an array
                document.getElementById('itm').innerHTML = "Paper";
                if(!item.includes('Paper')){
                    item.push('Paper');
                    all_itm_mrp.push("5&#8377;")
                    // Create table row one time and their cell and id
                    var tbl = document.getElementById("showitem_d");
                    var row = tbl.insertRow();
                    var cell1 = row.insertCell();
                    var cell2 = row.insertCell();
                    var cell3 = row.insertCell();
                    cell1.id = "paper"
                    cell2.id = "paper_qun"
                    cell3.id = "paper_prc"
                    
                }

                // add paper quantity
                paper_quntty.push(qunt);
                for(var a = 0; a < paper_quntty.length; a++){
                    tot_paper_qnty += paper_quntty[a]
                }
                document.getElementById('qty').innerHTML = tot_paper_qnty;

                // paper actual price set in a div
                document.getElementById('prc').innerHTML = "5 &#8377;";

                // add paper price
                tot_paper_prc.push(paper_prc);
                for(var b = 0; b < tot_paper_prc.length; b++){
                    paper_sum += tot_paper_prc[b]
                }
                document.getElementById('tot').innerHTML = paper_sum+" &#8377;";

                //find item index and that store thier price and quantity in array that mean assign price and quantity thier index wise
                var index = item.indexOf('Paper');
                all_price[index]=paper_sum;
                all_item_qunty[index]=tot_paper_qnty;

                // update data using id in table
                document.getElementById("paper").innerHTML = item[index];
                document.getElementById("paper_qun").innerHTML = all_item_qunty[index];
                document.getElementById("paper_prc").innerHTML = all_price[index]+" &#8377;";

                // display 
                document.getElementById('warn').innerHTML = "Add Sucessfully";
                var war = document.getElementById('warn');
                war.style.color = "green";

                //all_display
                document.getElementById('tot_itm').innerHTML = item.length;
                document.getElementById('tot_qnt').innerHTML = sumof(all_item_qunty);
                document.getElementById('tot_prc').innerHTML = sumof(all_price)+" &#8377;";
            }

            else if(cho==3){
                var pencil_prc = qunt * 3;
                //for add item on an array
                document.getElementById('itm').innerHTML = "Pencil";
                if(!item.includes('Pencil')){
                    item.push('Pencil');
                    all_itm_mrp.push("3&#8377;")
                    // Create table row one time and their cell and id
                    var tbl = document.getElementById("showitem_d");
                    var row = tbl.insertRow();
                    var cell1 = row.insertCell();
                    var cell2 = row.insertCell();
                    var cell3 = row.insertCell();
                    cell1.id = "pencil"
                    cell2.id = "pencil_qun"
                    cell3.id = "pencil_prc"
                    
                }

                // add pencil quantity
                pencil_quntty.push(qunt);
                for(var a = 0; a < pencil_quntty.length; a++){
                    tot_pencil_qnty += pencil_quntty[a]
                }
                document.getElementById('qty').innerHTML = tot_pencil_qnty;

                // pencil actual price set in a div
                document.getElementById('prc').innerHTML = "3 &#8377;";

                // add pencil price
                tot_pencil_prc.push(pencil_prc);
                for(var b = 0; b < tot_pencil_prc.length; b++){
                    pencil_sum += tot_pencil_prc[b]
                }
                document.getElementById('tot').innerHTML = pencil_sum+" &#8377;";

                //find item index and that store thier price and quantity in array that mean assign price and quantity thier index wise
                var index = item.indexOf('Pencil');
                all_price[index]=pencil_sum;
                all_item_qunty[index]=tot_pencil_qnty;

                // update data using id in table
                document.getElementById("pencil").innerHTML = item[index];
                document.getElementById("pencil_qun").innerHTML = all_item_qunty[index];
                document.getElementById("pencil_prc").innerHTML = all_price[index]+" &#8377;";

                // display 
                document.getElementById('warn').innerHTML = "Add Sucessfully";
                var war = document.getElementById('warn');
                war.style.color = "green";

                //all_display
                document.getElementById('tot_itm').innerHTML = item.length;
                document.getElementById('tot_qnt').innerHTML = sumof(all_item_qunty);
                document.getElementById('tot_prc').innerHTML = sumof(all_price)+" &#8377;";
            }

            else if(cho==4){
                var eraser_prc = qunt * 2;
                //for add item on an array
                document.getElementById('itm').innerHTML = "Eraser";
                if(!item.includes('Eraser')){
                    item.push('Eraser');
                    all_itm_mrp.push("2&#8377;")
                    // Create table row one time and their cell and id
                    var tbl = document.getElementById("showitem_d");
                    var row = tbl.insertRow();
                    var cell1 = row.insertCell();
                    var cell2 = row.insertCell();
                    var cell3 = row.insertCell();
                    cell1.id = "eraser"
                    cell2.id = "eraser_qun"
                    cell3.id = "eraser_prc"
                    
                }

                // add eraser quantity
                eraser_quntty.push(qunt);
                for(var a = 0; a < eraser_quntty.length; a++){
                    tot_eraser_qnty += eraser_quntty[a]
                }
                document.getElementById('qty').innerHTML = tot_eraser_qnty;

                // eraser actual price set in a div
                document.getElementById('prc').innerHTML = "2 &#8377;";

                // add eraser price
                tot_eraser_prc.push(eraser_prc);
                for(var b = 0; b < tot_eraser_prc.length; b++){
                    eraser_sum += tot_eraser_prc[b]
                }
                document.getElementById('tot').innerHTML = eraser_sum+" &#8377;";

                //find item index and that store thier price and quantity in array that mean assign price and quantity thier index wise
                var index = item.indexOf('Eraser');
                all_price[index]=eraser_sum;
                all_item_qunty[index]=tot_eraser_qnty;

                // update data using id in table
                document.getElementById("eraser").innerHTML = item[index];
                document.getElementById("eraser_qun").innerHTML = all_item_qunty[index];
                document.getElementById("eraser_prc").innerHTML = all_price[index]+" &#8377;";

                // display 
                document.getElementById('warn').innerHTML = "Add Sucessfully";
                var war = document.getElementById('warn');
                war.style.color = "green";

                //all_display
                document.getElementById('tot_itm').innerHTML = item.length;
                document.getElementById('tot_qnt').innerHTML = sumof(all_item_qunty);
                document.getElementById('tot_prc').innerHTML = sumof(all_price)+" &#8377;";
            }

            else if(cho==5){
                var book_prc = qunt * 25;
                //for add item on an array
                document.getElementById('itm').innerHTML = "Book";
                if(!item.includes('Book')){
                    item.push('Book');
                    all_itm_mrp.push("25&#8377;")
                    // Create table row one time and their cell and id
                    var tbl = document.getElementById("showitem_d");
                    var row = tbl.insertRow();
                    var cell1 = row.insertCell();
                    var cell2 = row.insertCell();
                    var cell3 = row.insertCell();
                    cell1.id = "book"
                    cell2.id = "book_qun"
                    cell3.id = "book_prc"
                    
                }

                // add book quantity
                book_quntty.push(qunt);
                for(var a = 0; a < book_quntty.length; a++){
                    tot_book_qnty += book_quntty[a]
                }
                document.getElementById('qty').innerHTML = tot_book_qnty;

                // book actual price set in a div
                document.getElementById('prc').innerHTML = "25 &#8377;";

                // add book price
                tot_book_prc.push(book_prc);
                for(var b = 0; b < tot_book_prc.length; b++){
                    book_sum += tot_book_prc[b]
                }
                document.getElementById('tot').innerHTML = book_sum+" &#8377;";

                //find item index and that store thier price and quantity in array that mean assign price and quantity thier index wise
                var index = item.indexOf('Book');
                all_price[index]=book_sum;
                all_item_qunty[index]=tot_book_qnty;

                // update data using id in table
                document.getElementById("book").innerHTML = item[index];
                document.getElementById("book_qun").innerHTML = all_item_qunty[index];
                document.getElementById("book_prc").innerHTML = all_price[index]+" &#8377;";

                // display 
                document.getElementById('warn').innerHTML = "Add Sucessfully";
                var war = document.getElementById('warn');
                war.style.color = "green";

                //all_display
                document.getElementById('tot_itm').innerHTML = item.length;
                document.getElementById('tot_qnt').innerHTML = sumof(all_item_qunty);
                document.getElementById('tot_prc').innerHTML = sumof(all_price)+" &#8377;";
            }


        }
        else{
            document.getElementById('warn').innerHTML = "Please! Enter the Right Quantity";
            var war = document.getElementById('warn');
            war.style.color = "red"; 
        }
    }
    else{
        document.getElementById('warn').innerHTML = "Please! Select Valid Option";
        var war = document.getElementById('warn');
        war.style.color = "red";
    }
    
}
var dummyitem = []
function bill_gen(){
    if(item.length>=1){
        document.getElementById('billcontainer').style.display = "block";
        document.getElementById('maincontainer').style.display = "none";
        
        for(a = 0; a < item.length; a++){
            if(!dummyitem.includes(item[a])){
                dummyitem.push(item[a])
                var tbl1 = document.getElementById("detail");
                var row = tbl1.insertRow();
                var cell1 = row.insertCell();
                var cell2 = row.insertCell();
                var cell3 = row.insertCell();
                var cell4 = row.insertCell();
                cell1.innerHTML = item[a]
                cell2.innerHTML = all_itm_mrp[a]
                cell3.innerHTML = all_item_qunty[a]
                cell4.innerHTML = all_price[a]
                // generate id
                cell3.id = item[a]+"_qnt_"+a
                cell4.id = item[a]+"_prc_"+a
            }
            document.getElementById(item[a]+"_qnt_"+a).innerHTML = all_item_qunty[a]
            document.getElementById(item[a]+"_prc_"+a).innerHTML = all_price[a]
        }
        console.log(dummyitem)

        // 
        var bill = sumof(all_price);
        var sgst = bill*3/100;
        var cgst = bill*5/100;
        var bill_tot = Math.round(bill + sgst + cgst);

        document.getElementById('itm_tot_price').innerHTML = bill+"&#8377;";
        document.getElementById('sgst').innerHTML = sgst+"&#8377;";
        document.getElementById('cgst').innerHTML = cgst+"&#8377;";
        document.getElementById('bill_show').innerHTML = bill_tot+"&#8377;";

        if(bill_tot <= 1000){
            var tot_pay_amt = bill_tot + 50;
            document.getElementById('del_char').innerHTML = 50+"&#8377;";
            document.getElementById('tot_pay_amt').innerHTML = tot_pay_amt+"&#8377;";
            document.getElementById('tpa').innerHTML = tot_pay_amt;
            // showing the last
            document.getElementById('save').innerHTML = 0+"&#8377;";
        }

        else if(bill_tot > 1000 && bill_tot <5000){
            var tot_pay_amt = bill_tot;
            document.getElementById('del_char').innerHTML = "Free";
            document.getElementById('tot_pay_amt').innerHTML = tot_pay_amt+"&#8377;";
            document.getElementById('tpa').innerHTML = tot_pay_amt;
            // showing the last
            document.getElementById('save').innerHTML = 0+"&#8377;";
        }

        else if(bill_tot > 5000){
            var disc = Math.round(bill_tot*10/100);
            var tot_pay_amt = bill_tot - disc;
            document.getElementById('del_char').innerHTML = "Free";
            document.getElementById('tot_pay_amt').innerHTML = tot_pay_amt+"&#8377;";
            document.getElementById('tpa').innerHTML = tot_pay_amt;
            // showing the last
            document.getElementById('save').innerHTML = disc+"&#8377;";
            var d1 = document.getElementById('save');
            d1.style.color = "Green";
        }

    }
    else{
        alert("Please! First You buy an item then your bill be generated...")
    }
    
}

function back(){
    document.getElementById('billcontainer').style.display = "none";
    // document.getElementById('maincontainer').style.display = "block";
    var userconfirmation = confirm("Do you want to Back this Page...");
    if(userconfirmation == true){
        window.document.getElementById('maincontainer').style.display = "block";
        return true
    }
    else{
        window.document.getElementById('billcontainer').style.display = "block";
        return false
    }

}

function pay_bill(){
    document.getElementById('billcontainer').style.display = "none";
    // document.getElementById('greet').style.display = "block";
    var userconfirmation = confirm("Are You Sure? You Pay this Amount...");
    if(userconfirmation == true){
        window.document.getElementById('greet').style.display = "block";
        return true
    }
    else{
        window.document.getElementById('billcontainer').style.display = "block";
    }
}