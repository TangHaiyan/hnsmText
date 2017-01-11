 $(function(){
   // 对比地址栏的href和a标签的href进行tab样式切换
   var tabChange = (function(){
     var targetHref = window.location.href;
      var tabs =  $('.bar-tab a');
      for (var i = 0; i < tabs.length; i++) {
        if (tabs[i].href == targetHref){
          $('.bar-tab').find('.active').removeClass('active');
          $(tabs[i]).addClass('active');
        }
      }  
   })();

   //二维码popup初始化
   $(document).on('click','.open-QRcode', function () {
      $.popup('.popup-QRcode');
    });
 
 //时间初始化
   $('#datetime-picker').datetimePicker({
   });
 

  //根据选择的美容师展示图片

  $('#text').on('change',function(){
    renderChoosedAvatar();
  })    

   var format = function(data) {
        var result = [];
        for(var i=0;i<data.length;i++) {
            var d = data[i];
            if(d.name === '请选择') continue;
            result.push(d.name);
        }
        if(result.length) return result;
        return [''];
    };
    var sub = function(data) {
        if(!data.sub) return [''];
        return format(data.sub);
    };

  function renderChoosedAvatar(){

 
    var raw = $.smConfig.rawProjectsData;

    var project = raw.map(function(d) {
        return d.name;
    });

    var inputValue = $('#text')[0].value.split(' ');
    // inputvalue中的值
    var col1Value = inputValue[0];
    var col2Value = inputValue[1];
    var col3Value = inputValue[2];
    //input的索引
    var index1 = project.indexOf(col1Value);
    var index2 = sub(raw[index1]).indexOf(col2Value);
    var index3 = sub(raw[index1].sub[index2]).indexOf(col3Value);

    //根据索引拿到美容师相关信息
     var choosedList = raw[index1].sub[index2].sub[index3];
     var avator = choosedList.avatar,
         number = choosedList.number,
         goodAt = choosedList.goodAt,
         name = choosedList.name;

    //进行渲染
    if ($('#text')[0].value == ''){
      $('.choose').show(); 
      $('#choose-avator').hide();

    }else{
      $('.choose').hide(); 
      $('#choose-avator img')[0].src = avator;
      $('#choose-avator .number')[0].innerText = '编号:' + number;
      $('#choose-avator .name')[0].innerText = '姓名:' + number;
      $('#choose-avator .goodAt')[0].innerText = '擅长:' + goodAt; 
      $('#choose-avator').show();
    }
    
  }


  $('#text').projectPicker({
    toolbarTemplate: '<header class="bar bar-nav">\
    <button class="button button-link pull-right close-picker">确定</button>\
    <h1 class="title">选择收货地址</h1>\
    </header>',
    // formatValue: function (picker, value, displayValue){
    //   console.log(value);
    //   console.log(displayValue);
    // }
  });


 // 内容不为空验证

    $('#choose-avator button').on('click',function(e){
      if ($('#datetime-picker')[0].value == '' ) {
         $.toast('请选择时间');
       }else if($('#phoneNumber')[0].value == ''){
         $.toast('请填写手机号码');
       }else{
         $('.subscribe').submit();
         var formData = $('.subscribe').serialize();
         alert(formData);
         e.preventDefault();
      }
       
    })


   





 })


