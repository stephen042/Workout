$(document).ready(function(){
   $(".grade_form").submit(findGrade);
});


function findGrade(e){
  e.preventDefault();

  $form = $(this);
  $formData  = $form.serializeArray();
  $formData.push({name:'findGrade',value:true});
  $.ajax({
    method:"POST",
    url:`${$form.attr("action")}`,
    data:$formData,
    success:function(response){
      $response = JSON.parse(response);
      if($response.success){
        console.log($(".success"))
        $(".display").removeClass("d-none").addClass($response.class).html($response.success);
      }else{
        $(".display").removeClass("d-none").addClass($response.class).html($response.error);

      }
    }
  })
  
}