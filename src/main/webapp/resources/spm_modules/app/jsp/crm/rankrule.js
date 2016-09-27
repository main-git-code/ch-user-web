define('app/jsp/crm/rankrule', function (require, exports, module) {
    'use strict';
    var $=require('jquery'),
    Widget = require('arale-widget/1.2.0/widget'),
    Dialog = require("optDialog/src/dialog"),
    Paging = require('paging/0.0.1/paging-debug'),
    Uploader = require('arale-upload/1.2.0/index'),
    AjaxController = require('opt-ajax/1.0.0/index'),
    Calendar = require('arale-calendar/1.1.2/index');
    
    require("jsviews/jsrender.min");
    require("jsviews/jsviews.min");
    require("bootstrap-paginator/bootstrap-paginator.min");
    require("bootstrap/dist/js/bootstrap.min");
    require("app/util/jsviews-ext");
    
    require("opt-paging/aiopt.pagination");
    require("twbs-pagination/jquery.twbsPagination.min");
    
    //实例化AJAX控制处理对象
    var ajaxController = new AjaxController();
    //定义页面组件类
    var RankRulePager = Widget.extend({
    	
    	//属性，使用时由类的构造函数传入
    	attrs: {
    	},
    	Statics: {
    		DEFAULT_PAGE_SIZE: 5
    	},
    	//事件代理
    	events: {
    		"change #rankRegion":"_initTable",
    		"click #saveRule":"_saveRule",
        },
    	//重写父类
    	setup: function () {
    		RankRulePager.superclass.setup.call(this);
    		this._initTable();
    	},
    	
    	_initTable:function(){
    		$("#TBODY_RANKRULE").html();
    		var count = $("#rankRegion").val();
    		if(count==null||count=="")
    			count=5;
    		//I am drunk
    		var count_=count-1;
    		var htmlOutput ="<tr><td class='text-l pl-10' style='white-space:nowrap'><p class='f-14' style='font-weight:400;'>等级 1:<input class='int-text int-mini' readonly='readonly' type='text' name='list[0].minScore' id='min1' value='0' style='border: none;background:none;width:60px;font-weight:400;'><input type='hidden' name=list[0].rank value='1'> - <input class='int-text int-mini' name='list[0].maxScore' id='max1' type='text' onblur=\""+"pager._changeValue('1')"+"\" maxlength='15' onkeydown='return doit()' style='width:60px'>分<input type='text' style='display:none;color:red' id='rankMsg1'></p></td>";
             htmlOutput+="<td class='text-l pl-10' style='white-space:nowrap'><p class='f-14'><input class='int-text int-mini' name='list[0].rankName' id='name1' type='text' onblur=\""+"pager._valideName('1')"+"\" maxlength='40'><input type='text' id='nameMsg1' style='display:none;color:red'></p></td>";
             htmlOutput+="<td class='text-l pl-10' style='white-space:nowrap'><p class='f-14'>图片名称 :<span class='btn-upload'><input class='int-text int-mini' disabled='disabled' id='picName1' style='border:none;background:none;width:60px;font-weight:400;'><input type='hidden' name='list[0].rankLogo' id='rankLogo1'><input type='hidden' name='rankName1' id='rankName1'>";
             htmlOutput+="&nbsp;<input type='button' class='btn-primary btn-default btn-medium' value='浏览文件'/>";
             htmlOutput+="<input type='file' class='int-file' id='img1' name='img1' onchange=\""+"pager._imgName('1')\"/></p></span><input type='hidden' id='idpsId1' name='list[0].idpsId'><input type='text' id='picErr1' style='display:none;color:red'></td></tr>";
    		if(count>2){
    		var json = '[';
    		for(var i=2;i<=count-1;i++){
    			json+='{id:{index:'+i+'}},';
    		}
    		json=json.substr(0,json.length-1);
    		json+=']';
    		json = eval("(" + json + ")");
    		var template = $.templates("#rankRuleImpl");
    		//渲染模版
            htmlOutput += template.render(json);
    		}
            htmlOutput+="<tr><td class='text-l pl-10' style='white-space:nowrap'><p class='f-14' style='font-weight:400;'>等级 "+count+":<input class='int-text int-mini' name='list["+count_+"].minScore' id='min"+count+"' type='text' value='0' readonly='readonly' id='min"+count+"' style='border: none;background:none;width:60px;font-weight:400;' maxlength='15' onkeydown='return doit()'>分以上</p><p class='f-14' style='font-weight:400;'><input type='text' style='display:none;color:red' id='rankMsg"+count+"'></p><input type='hidden' value='999999999999999' name='maxScore'><input type='hidden' value='"+count+"' name='list["+count_+"].rank'></td>";
            htmlOutput+="<td class='text-l pl-10' style='white-space:nowrap'><p class='f-14'><input class='int-text int-mini' name='list["+count_+"].rankName' id='name"+count+"' type='text' onblur=\""+"pager._valideName('"+count+"')\" maxlength='40'><input type='text' id='nameMsg"+count+"' style='display:none;color:red'></p></td>";
            htmlOutput+="<td class='text-l pl-10' style='white-space:nowrap'><p class='f-14'>图片名称 :<span class='btn-upload'><input class='int-text int-mini' disabled='disabled' id='picName"+count	+"' type='text' style='border: none;background:none;width:60px;font-weight:400;'><input type='hidden' name='list["+count_+"].rankLogo' id='rankLogo"+count+"'><input type='hidden' name='rankName"+count+"' id='rankName"+count+"'>";
            htmlOutput+="&nbsp;<input type='button' class='btn-primary btn-default btn-medium' value='浏览文件'/>";
            htmlOutput+="<input type='file' class='int-file' id='img"+count+"' name='img"+count+"' onchange=\""+"pager._imgName('"+count+"')\"/></p></span><input type='hidden' id='idpsId"+count+"' name='list["+count_+"].idpsId'><input type='text' id='picErr"+count+"' style='display:none;color:red'></td></tr>";
            $("#TBODY_RANKRULE").html(htmlOutput);
    	},
    	
    	_saveRule:function(){
    		var _this=this;
    		var count = $("#rankRegion").val();
    		if(count==null||count=="")
    			count=5;
    		for(var i=1;i<count;i++){
    			this._changeValue(i);
    			this._valideName(i);
    			var pic = $("#rankName"+i).val();
    			if(pic==""||pic==null){
    				$("#picErr"+index).val("(图片格式不能为空)");
		   			$("#picErr"+index).show();
		   			$("#rankLogo"+index).val("");
		   			$("#picFlag").val("0");
    				return false;
    			}
    		}
    		if(rankFlag!='0'&&nameFlag!='0'&&picFlag!='0')
    		$("#rankForm").submit();
    	},
    	
    	//获取上传图片名
    	_imgName:function(index) {
    		 var img = document.getElementById('img'+index).files;
    		 if(/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(img[0].name)){
    			 $("#picName"+index).val(img[0].name)
    			 $("#rankName"+index).val(img[0].name)
				 $("#picErr"+index).hide();
    		 }
    		 else{
    			 $("#picErr"+index).val("(图片格式不对)");
    			 $("#picErr"+index).show();
    			 $("#picName"+index).val("");
    			 $("#picFlag").val("0");
    		 }
    	},
    	
       	_changeValue:function(index){
    		document.getElementById('rankMsg'+index).style.display="none";
    		var maxIndex = $("#max"+index).val();
    		var minIndex = $("#min"+index).val();
    		//debugger;
    		if(maxIndex==""||maxIndex==null)
    		{
    			$("#rankMsg"+index).val('(等级区间不能为空)');
    			document.getElementById('rankMsg'+index).style.display="";
    			$("#rankFlag").val('0');
    			}
    		if(maxIndex<=minIndex){
    			$("#rankMsg"+index).val('(等级区间错误)');
    			document.getElementById('rankMsg'+index).style.display="";
    			$("#max"+index).val("");
    			$("#rankFlag").val('0');
    		}else{
    			$("#min"+(parseInt(index)+1)).val(maxIndex);
    		$("#rankFlag").val('1');
    		}
    	},
    	
    	_valideName:function(index){
    		document.getElementById('nameMsg'+index).style.display='none';
    		var name = $("#name"+index).val();
    		if(name==null||name==""){
    			$("#nameMsg"+index).val("(等级名称不能为空)");
				document.getElementById('nameMsg'+index).style.display="";
				$("#nameFlag").val('0');
    		}
    		$("#nameFlag").val('1');
    	}
    	
    });
    
    module.exports = RankRulePager
});

function getEvent() {
    if (document.all) {
        return window.event; //for ie
    }
    func = getEvent.caller;
    while (func != null) {
        var arg0 = func.arguments[0];
        if (arg0) {
            if ((arg0.constructor == Event || arg0.constructor == MouseEvent) || (typeof (arg0) == "object" && arg0.preventDefault && arg0.stopPropagation)) {
                return arg0;
            }
        }
        func = func.caller;
    }
    return null;
}
function doit(){
    var ev = getEvent();
    if((ev.keyCode>=48&&ev.keyCode<=57)||ev.keyCode==8) 
    	return true;
    return false;
}
