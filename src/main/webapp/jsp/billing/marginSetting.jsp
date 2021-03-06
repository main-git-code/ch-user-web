<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="uedroot" value="${pageContext.request.contextPath}/template/default"/>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<title>保证金设置</title>
<%@include file="/inc/inc.jsp" %>
<style type="text/css">
* {
	font-size: 14px;
}
label.error {
	color: Red;
	font-size: 13px;
	margin-left: 5px;
	padding-left: 16px;
}
</style>
</head>
<body>
   <div class="content-wrapper-iframe" ><!--右侧灰色背景-->
     <!--框架标签结束-->
  		  <div class="row"><!--外围框架-->
            <div class="col-lg-12"><!--删格化-->
                <div class="row"><!--内侧框架-->
                    <div class="col-lg-12"><!--删格化-->
                        <div class="main-box clearfix"><!--白色背景-->
                        <!--标题-->
                            <header class="main-box-header clearfix">
                            <h5 class="pull-left">保证金设置</h5>
                            </header>
                        <!--标题结束-->   
                            <div class="main-box-body clearfix">
                            	<!--table表格-->
                                <div class="table-responsive clearfix">
								 <div class="form-label pl-40">
							           	<ul>
							                <li  class="col-md-6">
							                    <p class="word">用户名:</p>
							                    <p>${userName }</p>
							                </li>
							                <li  class="col-md-6">
							                    <p class="word">企业名称:</p>
							                    <p>${shopName }</p>
							                </li>  
							            </ul>  
							            <ul>
							                <li class="col-md-6">
							                    <p class="word">当前保证金:</p>
							                    <p>${deposit }元</p>
							                </li>
							            </ul>
							  	</div>
							 <div class="form-label">
								 	<form id="depositForm">
								 	<ul>
								 	<li>
				              		<p class="word"><b class="red">*</b>保证金</p>
				                    <p><input type="text" class="int-text int-mini" name="depositBalance" id="depositBalance" maxlength="15" onkeydown="return doit()">
				                    	元(一次性收取)</p><p><input type="text" style="display:none;color:red" id="depositInfo" value="1-15位整数"></p><p class="input-group"></p>
				                    <input type="hidden" value="${userId }" name="userId" id="userId">
				                	</li>
								 	</ul>
								 	</form>
								 	<ul>
								 	<li>
								 		<p class="word">&nbsp;</p>
								 		<p><input type="button" id="saveSetting" class="biu-btn  btn-primary btn-blue btn-medium ml-10" value="保存"></p>
								 	</li>
								 	<li><p><input type="button"
												onclick="backup();" class="biu-btn  btn-primary btn-blue btn-medium ml-5"
												value="返回"></p></li>
								 	</ul>
								 </div>
							</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </div>
  </div>   
  
		<script type="text/javascript">
		var pager;
		var userId='${userId}';
		(function() {
			seajs.use('app/jsp/billing/marginSetting', function(MarginSettingPager) {
				pager = new MarginSettingPager({
					element : document.body
				});
				pager.render();
			});
		})();
	</script>
</body>
</html>