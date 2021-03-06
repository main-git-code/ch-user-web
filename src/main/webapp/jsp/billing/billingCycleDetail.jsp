<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="uedroot" value="${pageContext.request.contextPath}/template/default"/>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<title>结算周期详情</title>
<%@include file="/inc/inc.jsp" %>
<script src="${uedroot}/scripts/modular/frame.js"></script>  
<link rel="stylesheet" type="text/css" href="${uedroot}/css/modular/modular.css"/>
</head>
<body>
  		  <div class="row"><!--外围框架-->
            <div class="col-lg-12"><!--删格化-->
                <div class="row"><!--内侧框架-->
                    <div class="col-lg-12"><!--删格化-->
                        <div class="main-box clearfix"><!--白色背景-->   
							<div class="main-box-body clearfix">
	                          <header class="main-box-header clearfix">
	                           	 <h5 class="pull-left">查看详情</h5>
	                          </header>
                         	  <div class="form-label">
								<ul>
									<li class="col-md-6">
										<p class="word">用户名:</p>
										<p>${userName }</p>
										<input type="hidden" value="${userName}" id="userName"/>
									</li>
									<li class="col-md-6">
										<p class="word">企业名称:</p>
										<p>${custName}</p>
										<input type="hidden" value="${custName}" id="custName"/>
									</li>
								</ul>
                          	 </div>
                          	 <!--标题带下划线-->
							<div class="nav-tplist-title bd-bottom pb-10">
				                  <ul>
				                    <li>当前结算周期:
				                    	<p>
											<c:if test="${shopInfo.periodType=='M' }">
					                     	月（自然月）
					                     </c:if>
											<c:if test="${shopInfo.periodType=='Q'}">
					                     	季度（自然季度）
					                     </c:if>
											<c:if test="${shopInfo.periodType=='D'}">
					                     	T+1（日结）
					                     </c:if>
											<c:if test="${shopInfo.periodType=='R'}">
					                     	实时
					                     </c:if>
										</p>
				                    </li>
				                  </ul>
				       	     </div>	
							<div class="text-c">
								<ul>
									<li>
									  <input type="button"   class="biu-btn  btn-primary btn-blue btn-medium ml-5"
										onclick="history.go(-1)"	value="返回">
									</li>
								</ul>
							</div>
						</div>
						</div>
                    </div>
                </div>
            
            </div>
    </div>
</body>
</html>
