// $(document).ready(function(){
// 	Add_Person();
// 	// view_data();
// 	// get_particular_record();
// 	// update_record();
// 	// delete_record();
// 	// sort_record();
// 	// search();
// 	// live_search();
// 	// view_single_record();
// })
//
//
// // Adding New Person -- Neue Person hinzufügen
// function Add_Person(){
// 	$(document).on('click', '#submit-btn', function(){
// 		console.log("button click")
//
// 		var var_Kreditinstitut = $('#Kreditinstitut').val();
// 		var var_IBAN = $('#IBAN').val();
//
// 		if(var_vorname == ""){
// 			Lobibox.notify('error', {
//     				position: 'right top',
//    					msg: 'Please Enter First Name / Bitte Schreiben VorName',
//    					icon : 'far fa-times-circle',
//   					});
// 		}
// 		else if(var_Name == ""){
// 			Lobibox.notify('error', {
//     				position: 'right top',
//    					msg: 'Please Enter Last Name / Bitte Schreiben NachName',
//    					icon : 'far fa-times-circle',
//   					});
// 		}
// 		else{
// 			$.ajax({
// 				url : 'insert.php',
// 				method : 'POST',
// 				data : {Kreditinstitut:var_Kreditinstitut, IBAN:var_IBAN},
// 				success: function(data){
//
// 					Lobibox.notify('success', {
//     				position: 'right top',
//    					msg: 'Your data has been added / Ihre Daten wurden gespeichert',
//    					icon : 'fas fa-check-circle',
//   					});
//
//
// 					$('#addPerson').modal('hide');
// 					$('#newform').trigger('reset');
// 					view_data();
// 				}
// 			}
// 			)
// 		}
// 	})
//
// }


// button Close -- Button Schließen
$(document).on('click', '#btn_close', function(){
				$('form').trigger('reset');
				view_data();
})


// Top Button close -- oben Button Schließen
$(document).on('click', '#close', function(){
	$('form').trigger('reset');
	view_data();
})


// displaying complete data -- Anzeige vollständiger Daten
function view_data(){
	
	$.ajax({
		url : 'view.php',
		method : 'POST',
		dataType: 'json',
		success: function(data){
			if(data.status=='success'){
				$('#table').html(data.html);
			}


		}
	})


}


//get particular data -- bestimmte Daten erhalten
function get_particular_record(){
	$(document).on('click','#btn_edit', function(){
		var id_person = $(this).attr('data-id');
		$.ajax({
		url : 'get_data.php',
		method : 'post',
		data:{userid:id_person},
		dataType: 'json',
		success: function(data){
			$('#up_userid').val(data[0]);
			$('#up_VorName').val(data[1]);
			$('#up_Name').val(data[2]);
			$('#update_Person').modal('show');
		}
	})
	})
}

// Update record Funtion -- Datensatz aktualisieren Funktion
function update_record(){

	$(document).on('click', '#btn_update', function(){
		var update_id = $('#up_userid').val();
		var update_vorname = $('#up_VorName').val();
		var update_name = $('#up_Name').val();
		if(update_vorname == ""){
			Lobibox.notify('error', {
    				position: 'right top',
   					msg: 'Please Enter First Name / Bitte Schreiben VorName',
   					icon : 'far fa-times-circle',
  					});
			$('#update_Person').modal('show');
		}
		else if(update_name == ""){
			Lobibox.notify('error', {
    				position: 'right top',
   					msg: 'Please Enter Last Name / Bitte Schreiben NachName',
   					icon : 'far fa-times-circle',
  					});	
			$('#update_Person').modal('show');
		}
		else{
			$.ajax({
				url:'update.php',
				method:'post',
				data:{updated_id:update_id, updated_vorname:update_vorname, updated_name:update_name},
				success: function(data){
					Lobibox.notify('success', {
    				position: 'right top',
   					msg: 'Your data has been saved / Ihre Daten wurden gespeichert',
   					icon : 'fas fa-check-circle',
  					});
					$('#update_Person').modal('hide');
					$('#update_form').trigger('reset');
					view_data();
				}
			})	
		}	
	})
}


// Delete Function - löschen Funktion 
function delete_record(){
	$(document).on('click', '#btn_delete', function(){
		var id_delete = $(this).attr('data-id1');
		$.ajax({
			url:'delete.php',
			method: 'post',
			async: false,
			data:{del_id:id_delete},
			success: function(data){

				Lobibox.notify('success', {
    				position: 'right top',
   					msg: 'Your data has been Deleted /Ihre Daten wurden gelöscht ',
   					icon : 'fas fa-check-circle',
  					});
				$('#delete_Person').modal('hide');
				view_data();
			}
		})
		
	
	})
}


//Sorting Ascending und descending -- Aufsteigend und absteigend sortieren

function sort_record(){
	$(document).on('click', '.column_sort', function(){  
           var column_name = $(this).attr("id");  
           var order = $(this).data("order");  
           var arrow = '';  
           //glyphicon glyphicon-arrow-up  
           //glyphicon glyphicon-arrow-down  
           if(order == 'desc'){  
                arrow = '&nbsp;&nbsp;<span class="fas fa-sort-amount-down"></span>';  
           }  
           else{  
                arrow = '&nbsp;&nbsp;<span class="fas fa-sort-amount-up-alt"></span>';  
           }  
           $.ajax({  
                url:"sort.php",  
                method:"POST",  
                data:{column_name:column_name, order:order},
                
                success:function(data)  
                {  
                     $('#table').html(data);  
                     $('#'+column_name+'').append(arrow);  
                }  
           })  
      });
}
  
//search funtion -- suchen funktion
function search(){
	$('#gsearchsimple').keyup(function(){
		var query = $('#gsearchsimple').val();
		$('.list-group').css('display', 'block');
		if(query.length == 1 || query.length == 2){
			$.ajax({
			url:"fetch.php",
			method:"POST",
			data:{query:query},
			success:function(data){
				//console.log(data);
				$('.list-group').html(data);
			}
			})
		}


		if(query.length == 0){
		$('.list-group').css('display', 'none');
		view_data();
		}
	});


	$('#localSearchSimple').jsLocalSearch({
		action:"Show",
		html_search:true,
		mark_text:"marktext"
	});


	$(document).on('click', '.gsearch', function(){
		var search_id = $(this).prop('id');
		$('#gsearchsimple').val($(this).text());	
		$('.list-group').css('display', 'none');
		$.ajax({
			url:"fetch.php",
			method:"POST",
			data:{search_id:search_id},
			success:function(data){
			//	console.log(data);
			$('#table').html(data);
			}
		})
	});
}

// Live search all data -- Live-Suche in allen Daten
function live_search(){
	$('#gsearchsimple').keyup(function(){
  	var search = $(this).val();
  	if(search != ''){
  		console.log();
   		load_data(search);
  	}
  	else{
   		load_data();
  	}
 	});
}

function load_data(query)
 {
  $.ajax({
   url:"livesearch.php",
   method:"POST",
   data:{query:query},
   success:function(data)
   {
    $('#table').html(data);
   }
  });
 }

//view data -- data sehen
function view_single_record(){
	$(document).on('click','#btn_view', function(){
		var id_person = $(this).attr('data-id2');
		$.ajax({
		url : 'get_data.php',
		method : 'post',
		data:{userid:id_person},
		dataType: 'json',
		success: function(data){
			$('#view_userid').html(data[0]);
			$('#view_VorName').html(data[1]);
			$('#view_Name').html(data[2]);
			$('#view_Person').modal('show');
		}
	})
	})
}