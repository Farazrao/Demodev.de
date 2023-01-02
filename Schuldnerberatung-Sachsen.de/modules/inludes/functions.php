

//require_once('connection.php');


//Adding New Record
//function Add_Person(){
//    global $con;
//
//    $Kreditinstitut = $_POST['credits'];
//    $IBAN = $_POST['ibans'];
//
//    $query = "insert into form3 (Kreditinstitut,IBAN) values( '$Kreditinstitut',$IBAN)";
//    $result = mysqli_query($con,$query);
//    if($result){
//        echo "Your Records has been Saved";
//    }
//    else{
//        echo "Please Check your Query";
//    }



//Dispaying Data
//function get_data(){
//    global $con;
//    $value = "";
//    $value = '<table class="table table-bordered" id="person_tbl">
//                <thead>
//                    <tr>
//                        <th><a href="#" class="column_sort" id="id" data-order="desc">ID </a></th>
//                        <th><a class="column_sort" id="vorname" data-order="desc" href="#">VorName</a></th>
//                        <th><a class="column_sort" id="name" data-order="desc" href="#">Name</a></th>
//                        <th>  Action </th>
//                    </tr>
//                </thead><tbody>';
//    $query = "select * from tbl_person ORDER BY id DESC";
//    $result =  $result = mysqli_query($con,$query);
//
//    while($row = mysqli_fetch_assoc($result)){
//        $value.= '<tr>
//                    <td>'.$row['id'].'</td>
//                    <td>'.$row['vorname'].'</td>
//                    <td>'.$row['name'].'</td>
//                    <td>
//                    <button type="button" class="btn btn-info" id="btn_view" data-id2='.$row['id'].'><span class="fa fa-eye"></span></button>
//                    <button type="button" class="btn btn-success" id="btn_edit" data-id='.$row['id'].'><span class="fa fa-edit"></span></button>
//                    <button type="button" class="btn btn-danger" id="btn_delete" data-id1='.$row['id'].'><span class="fa fa-trash"></span></button>
//                    </td>
//                </tr>';
//    }
//    $value .= '</tbody></table>';
//    echo json_encode(['status'=>'success','html'=>$value]);
//}
//
//
//// Geting Particular Record
//function get_particular_record(){
//    global $con;
//    $userid = $_POST['userid'];
//
//    $query = "select * from tbl_person where id='$userid'";
//    $result = mysqli_query($con,$query);
//
//    while($row = mysqli_fetch_assoc($result)){
//        $user_data[0] = $row['id'];
//        $user_data[1] = $row['vorname'];
//        $user_data[2] = $row['name'];
//
//    }
//    echo json_encode($user_data);
//}
//
//
//// Update record Funtion
//function update_record(){
//     global $con;
//     $id_for_update =  $_POST['updated_id'];
//     $vorname_for_update = $_POST['updated_vorname'];
//     $name_for_update = $_POST['updated_name'];
//
//     $query = "update tbl_person set vorname='$vorname_for_update', name='$name_for_update' where id='$id_for_update'";
//     $result = mysqli_query($con,$query);
//
//     if($result){
//        echo "Your Record has Been Updated";
//     }
//     else{
//        echo "Please Check Your Query";
//     }
//}
//
//
////delete Record
//function delete_record(){
//    global $con;
//    $del_id = $_POST['del_id'];
//    $query = "delete from tbl_person where id='$del_id' LIMIT 1";
//    $result = mysqli_query($con,$query);
//
//    if($result){
//        echo "Your Record has Been Deleted";
//     }
//     else{
//        echo "Please Check Your Query";
//     }
//}
//
//
////sorting ascending and descending
//function sort_records(){
//     global $con;
//     $output = '';
//     $order = $_POST["order"];
//     if($order == 'desc')
//     {
//          $order = 'asc';
//     }
//     else
//     {
//          $order = 'desc';
//     }
//     $query = "SELECT * FROM tbl_person ORDER BY ".$_POST["column_name"]." ".$_POST["order"]."";
//     $result = mysqli_query($con, $query);
//     $output .= '
//     <table class="table table-bordered" id="person_tbl">
//         <thead>
//                    <tr>
//                        <th><a href="#" class="column_sort" id="id" data-order="'.$order.'">ID </a></th>
//                        <th><a class="column_sort" id="vorname" data-order="'.$order.'" href="#">VorName</a></th>
//                        <th><a class="column_sort" id="name" data-order="'.$order.'" href="#">Name</a></th>
//                        <th>  Action </th>
//                    </tr>
//                </thead><tbody>
//     ';
//     while($row = mysqli_fetch_array($result))
//     {
//          $output .= '<tr>
//                    <td>'.$row['id'].'</td>
//                    <td>'.$row['vorname'].'</td>
//                    <td>'.$row['name'].'</td>
//                    <td>
//                    <button type="button" class="btn btn-info" id="btn_view" data-id2='.$row['id'].'><span class="fa fa-eye"></span></button>
//                    <button type="button" class="btn btn-success" id="btn_edit" data-id='.$row['id'].'><span class="fa fa-edit"></span></button>
//                     <button type="button" class="btn btn-danger" id="btn_delete" data-id1='.$row['id'].'><span class="fa fa-trash"></span></button>
//                    </td>
//                </tr>';
//     }
//     $output .= '</tbody></table>';
//     echo $output;
//}
//
//
////Search Funtion
//function Search(){
//    global $con;
//    if(isset($_POST['query'])){
//
//    $query ="select * FROM tbl_person where vorname like '%".trim($_POST["query"])."%' OR name like '%".trim($_POST["query"])."%'";
//    $result = mysqli_query($con, $query);
//    $output = '';
//
//    foreach($result as $row){
//        $output .= '<li class="list-group-item contsearch" ><a href="javascript:void(0)" class="gsearch" style="color:#333;text-decoration:none; data-id="1" id="'.$row['id'].'">'.$row["vorname"].'&nbsp;'.$row["name"].'</a>
//        </li>
//        ';
//    }
//    echo $output;
//    }
//
//
//if(isset($_POST['search_id'])){
//    $id_for_search = $_POST['search_id'];
//    global $con;
//    $value = "";
//    $value = '<table class="table table-bordered" id="person_tbl">
//                <thead>
//                    <tr>
//                        <th><a href="#" class="column_sort" id="id" data-order="desc">ID </a></th>
//                        <th><a class="column_sort" id="vorname" data-order="desc" href="#">VorName</a></th>
//                        <th><a class="column_sort" id="name" data-order="desc" href="#">Name</a></th>
//                        <th>  Action </th>
//                    </tr>
//                </thead><tbody>';
//    $query = "select * from tbl_person where id ='$id_for_search' LIMIT 1";
//    $result =  $result = mysqli_query($con,$query);
//
//    while($row = mysqli_fetch_assoc($result)){
//        $value.= '<tr>
//                    <td>'.$row['id'].'</td>
//                    <td>'.$row['vorname'].'</td>
//                    <td>'.$row['name'].'</td>
//                    <td>
//                    <button type="button" class="btn btn-info" id="btn_view" data-id2='.$row['id'].'><span class="fa fa-eye"></span></button>
//                    <button type="button" class="btn btn-success" id="btn_edit" data-id='.$row['id'].'><span class="fa fa-edit"></span></button>
//                     <button type="button" class="btn btn-danger" id="btn_delete" data-id1='.$row['id'].'><span class="fa fa-trash"></span></button>
//                    </td>
//                </tr>';
//    }
//    $value .= '</tbody></table>';
//    echo $value;
//}
}





function live_search(){
    global $con;
    if(isset($_POST["query"])){
        $search = mysqli_real_escape_string($con, $_POST["query"]);
        $query = "SELECT * FROM tbl_person WHERE vorname LIKE '%".$search."%' OR name LIKE '%".$search."%' OR id LIKE '%".$search."%'";
    }
    else{
        $query = "select * from tbl_person ORDER BY id DESC";
    }

    $result = mysqli_query($con, $query);
    $value = "";
    $value = '<table class="table table-bordered" id="person_tbl">
                <thead>
                    <tr>
                        <th><a href="#" class="column_sort" id="id" data-order="desc">ID </a></th>
                        <th><a class="column_sort" id="vorname" data-order="desc" href="#">VorName</a></th>
                        <th><a class="column_sort" id="name" data-order="desc" href="#">Name</a></th>
                        <th>  Action </th>
                    </tr>
                </thead><tbody>';
    if(mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_assoc($result)){
        $value.= '<tr>
                    <td>'.$row['id'].'</td>
                    <td>'.$row['vorname'].'</td>
                    <td>'.$row['name'].'</td>
                    <td>
                    <button type="button" class="btn btn-info" id="btn_view" data-id2='.$row['id'].'><span class="fa fa-eye"></span></button> 
                    <button type="button" class="btn btn-success" id="btn_edit" data-id='.$row['id'].'><span class="fa fa-edit"></span></button> 
                     <button type="button" class="btn btn-danger" id="btn_delete" data-id1='.$row['id'].'><span class="fa fa-trash"></span></button>   
                    </td>
                </tr>';
    }
    $value .= '</tbody></table>';
    echo $value;
    }
    else{
        echo 'Data Not Found';
    }
}
?>