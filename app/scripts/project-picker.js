//  $(function(){

//     var select1=document.getElementById("select1");  
//     var select2=document.getElementById("select2");  
//     var select3=document.getElementById("select3");  
//     var selectList=[select1,select2,select3];  
  
//    cascade(selectList,data);  
  

//     function cascade(selectList,data){  
//         // 这里selectList为依次级联的选择器元素列表，如[select1,select2,select3,...]  
//         // TODO  
//         for(var i=0;i<selectList.length;i++){  
//             var temp_data=data;  
//             for(var j=0;j<i;j++){  
//                 temp_data=temp_data[0].list;  
//             }  
//             fillSelect(selectList[i],temp_data);  

//             //增加变更事件  
//             selectList[i].addEventListener(  
//                 "change",function(event){  
//                     var value=event.target.value;  
//                     var v_p=value.split(".");  
//                     var v_length=v_p.length;  
//                     //如果是最后一个select就跳出  
//                     if(v_length>=selectList.length)return;  
//                     //构造新的选择器  
//                     var newSelectList=[];  
//                     for(var j=v_length;j<selectList.length;j++)  
//                         newSelectList.push(selectList[j]);  
//                     //alert(newSelectList.length);  
//                     //构造新的数据  
//                     var newData=data;  
//                     for(var j=0;j<v_p.length;j++){  
//                         newData=newData[parseInt(v_p[j])-1].list;  
//                     }  
//                     cascade(newSelectList,newData);  
//                 }  
//             );  
//         }  
          
//     }  
//     //更新select  
//     function fillSelect(select,list){  
//         select.innerHTML="";  
          
//         list.forEach(function(data){  
//             var option=new Option(data.text,data.value);  
//             select.add(option);  
//         });  
//     } 
// })





+ function($) {
    'use strict';

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

    var getCities = function(d) {
        for(var i=0;i< raw.length;i++) {
            if(raw[i].name === d) return sub(raw[i]);
        }
        return [''];
    };

    var getDistricts = function(p, c) {
        for(var i=0;i< raw.length;i++) {
            if(raw[i].name === p) {
                for(var j=0;j< raw[i].sub.length;j++) {
                    if(raw[i].sub[j].name === c) {
                        return sub(raw[i].sub[j]);
                    }
                }
            }
        }
        return [''];
    };

    var raw = $.smConfig.rawProjectsData;
    var provinces = raw.map(function(d) {
        return d.name;
    });
    var initCities = sub(raw[0]);
    var initDistricts = sub(raw[0].sub[0]);
    var currentProvince = provinces[0];
    var currentCity = initCities[0];
    var currentDistrict = initDistricts[0];



    var t;
    var defaults = {

        cssClass: 'city-picker',
        rotateEffect: false,  //为了性能

        onChange: function (picker, values, displayValues) {
            var newProvince = picker.cols[0].value;

            var newCity;
            if(newProvince !== currentProvince) {
                // 如果Province变化，节流以提高reRender性能
                clearTimeout(t);

                t = setTimeout(function(){
                    var newCities = getCities(newProvince);
                    newCity = newCities[0];
                    var newDistricts = getDistricts(newProvince, newCity);
                    picker.cols[1].replaceValues(newCities);
                    picker.cols[2].replaceValues(newDistricts);
                    currentProvince = newProvince;
                    currentCity = newCity;
                    picker.updateValue();
                }, 200);
                return;
            }
            newCity = picker.cols[1].value;

            if(newCity !== currentCity) {
                picker.cols[2].replaceValues(getDistricts(newProvince, newCity));
                currentCity = newCity;
                picker.updateValue();
            }
    //  var col1Index = picker.cols[0].values.indexOf(newProvince);
    // var col2Index = picker.cols[1].values.indexOf(newCity);
    // var col3Index = picker.cols[2].values.indexOf(picker.cols[2].value);

        },

        cols: [
        {
            textAlign: 'center',
            values: provinces,
            cssClass: 'col-province'
        },
        {
            textAlign: 'center',
            values: initCities,
            cssClass: 'col-city'
        },
        {
            textAlign: 'center',
            values: initDistricts,
            cssClass: 'col-district'
        }
        ]
    };

    $.fn.projectPicker = function(params) {
        return this.each(function() {
            if(!this) return;
            var p = $.extend(defaults, params);
            //计算value
            if (p.value) {
                $(this).val(p.value.join(' '));
            } else {
                var val = $(this).val();
                val && (p.value = val.split(' '));
            }

            if (p.value) {
                //p.value = val.split(" ");
                if(p.value[0]) {
                    currentProvince = p.value[0];
                    p.cols[1].values = getCities(p.value[0]);
                }
                if(p.value[1]) {
                    currentCity = p.value[1];
                    p.cols[2].values = getDistricts(p.value[0], p.value[1]);
                } else {
                    p.cols[2].values = getDistricts(p.value[0], p.cols[1].values[0]);
                }
                !p.value[2] && (p.value[2] = '');
                currentDistrict = p.value[2];
            }
            $(this).picker(p);
        });
    };

}(Zepto);

