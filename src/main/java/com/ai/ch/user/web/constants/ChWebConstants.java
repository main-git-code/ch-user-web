package com.ai.ch.user.web.constants;

/**
 * 商户web常用代码常量 Date: 2017年1月4日 <br>
 * Copyright (c) 2017 asiainfo.com <br>
 * 
 * @author zhangqiang7
 */
public class ChWebConstants {

	/**
	 * 通用租户标识
	 */
	public static final String  COM_TENANT_ID = "changhong";
	/**
	 * 合同类型 供应商 =1
	 */
	public static final String CONTRACT_TYPE_SUPPLIER = "1";

	/**
	 * 合同类型 店铺 =2
	 */
	public static final String CONTRACT_TYPE_SHOP = "2";

	/**
	 * 供应商扫描合同
	 */
	public static final String SCAN_CONTRACT_SUPPLIER = "30001";

	/**
	 * 供应商电子合同
	 */
	public static final String ELECTRONIC_CONTRACT_SUPPLIER = "30002";

	/**
	 * 店铺扫描合同
	 */
	public static final String SCAN_CONTRACT_SHOP = "40001";

	/**
	 * 店铺电子合同
	 */
	public static final String ELECTRONIC_CONTRACT_SHOP = "40002";

	/**
	 * 供应商附件类型
	 */
	public static final String INFOTYPE_SUPPLIER = "30";

	/**
	 * 店铺附件类型
	 */
	public static final String INFOTYPE_SHOP = "40";

	public final static class Tenant {
		private Tenant() {
		}

		/**
		 * 租户Id
		 */
		public static final String TENANT_ID = "changhong";
	}

	public final static class OperateCode {
		private OperateCode() {
		}

		/**
		 * 成功，成功时取返回报文体
		 */
		public static final String SUCCESS = "000000";

		/**
		 * 失败
		 */
		public static final String Fail = "999999";
		/**
		 * 数据为空
		 */
		public static final String ISNULL = "111111";
	}

	public static final class ExceptionCode {
		private ExceptionCode() {
		}

		/**
		 * 成功ID
		 */
		public static final java.lang.String SUCCESS_CODE = "000000";// 成功
		/*** 失败ID */
		public static final String ERROR_CODE = "111111";
		// 系统错误
		public static final java.lang.String SYSTEM_ERROR = "999999";

		// 参数为空
		public static final java.lang.String PARAM_IS_NULL = "888888";

		// 无结果
		public static final java.lang.String NO_RESULT = "000001";

		// 参数类型错误
		public static final java.lang.String PARAM_TYPE_NOT_RIGHT = "000002";

		// 无数据或缓存错误
		public static final java.lang.String NO_DATA_OR_CACAE_ERROR = "000003";

		// 参数取值错误
		public static final java.lang.String PARAM_VALUE_NOT_RIGHT = "000004";

		// 参数值重复错误
		public static final java.lang.String PARAM_VALUE_EXIST_ERROR = "000005";

		// 结果为空
		public static final java.lang.String RESULT_IS_NULL = "000006";

		// 合同名称错误
		public static final java.lang.String CONTRACT_NAME_ERROR = "100005";
		// 合同代码有误
		public static final java.lang.String CONTRACT_CODE_ERROR = "100005";
	}

	public static final class UploadImg {
		private UploadImg() {
		}

		/**
		 * 上传成功
		 */
		public static final String UploadImg_SUCCESS = "success";
		/**
		 * 上传失败
		 */
		public static final String UploadImg_ERROR = "fail";
	}

	/**
	 * 审核日志
	 * 
	 * @author Zh
	 *
	 */
	public static final class AuditLog {
		private AuditLog() {
		}

		/**
		 * 待审核
		 */
		public static final String AUDIT_READY = "0";
		/**
		 * 审核通过
		 */
		public static final String AUDIT_PASS = "1";
		/**
		 * 审核拒绝
		 */
		public static final String AUDIT_REJECT = "2";
	}

	/**
	 * 资质审核常量
	 */
	public static final class Audit {
		private Audit() {
		}

		/**
		 * appkey
		 * 校验码
		 */
		public static final String APPKEY = "appkey";

		/**
		 * companyId
		 * 商户id
		 */
		public static final String COMPANY_ID = "companyId";

		/**
		 * 获取otpurl
		 * otp地址
		 */
		public static final String FINDBYCOMPANYID = "findByCompanyId_http_url";

		/**
		 * 创建时间
		 */
		public static final String CREATETIME = "createTime";

		/**
		 * 纳税人类型
		 */
		public static final String TAXPAYERTYPE = "taxpayerType";

		/**
		 * 一般纳税人
		 */
		public static final String GENERAL = "一般纳税人";

		/**
		 * 小规模纳税人
		 */
		public static final String TAXPAYER = "小规模纳税人";

		/**
		 * 非增值税纳税人
		 */
		public static final String NONVALUE = "非增值税纳税人";

		/**
		 * legalRepresentative
		 * 法人代表
		 */
		public static final String LEGALREPRESENTATIVE = "legalRepresentative";

		/**
		 * 电话
		 */
		public static final String PHONE = "phone";

		/**
		 * email
		 * 邮件
		 */
		public static final String EMAIL = "email";

		/**
		 * idnumber
		 * 序列号
		 */
		public static final String IDNUMBER = "idNumber";

		/**
		 * bankaccount
		 * 银行账号
		 */
		public static final String BANKACCOUNT = "bankAccount";

		/**
		 * businessAddress
		 * 企业地址
		 */
		public static final String BUSINESSADDRESS = "businessAddress";

		/**
		 * userId
		 * 用户序列号
		 * 
		 */
		public static final String USERID = "userId";

		/**
		 * userName
		 * 用户名
		 */
		public static final String USERNAME = "userName";

		/**
		 * shopname
		 * 商户名
		 */
		public static final String SHOPNAME = "shopName";

		/**
		 * industryType
		 * 企业类型
		 */
		public static final String INDUSTRYTYPE = "industryType";

		/**
		 * officialWebsite
		 * 企业网站
		 * 
		 */
		public static final String OFFICIALWEBSITE = "officialWebsite";
		/**
		 * companiesNumber
		 * 企业名
		 */
		public static final String COMPANIESNUMBER = "companiesNumber";
		/**
		 * companyNature
		 * 企业类型
		 */
		public static final String COMPANYNATURE = "companyNature";
		/**
		 * annualTurnover
		 * 年营业额
		 */
		public static final String ANNUALTURNOVER = "annualTurnover";
		/**
		 * areaCover
		 * 占地面积
		 */
		public static final String AREACOVER = "areaCover";
		/**
		 * fax
		 * 传真
		 */
		public static final String FAX = "fax";
		/**
		 * location
		 * 地址
		 */
		public static final String LOCATION = "location";
		/**
		 * businessLicenseRegistrationNumber
		 * 营业执照注册号
		 */
		public static final String BUSINESSLICENSEREGISTRATIONNUMBER = "businessLicenseRegistrationNumber";
		/**
		 * establishDate
		 * 注册日期
		 */
		public static final String ESTABLISHDATE = "establishDate";
		/**
		 * taxpayerNumber
		 * 纳税码
		 */
		public static final String TAXPAYERNUMBER = "taxpayerNumber";
		/**
		 * businessScope
		 * 营业范围
		 */
		public static final String BUSINESSSCOPE = "businessScope";
		/**
		 * taxCode
		 * 税码
		 */
		public static final String TAXCODE = "taxCode";
		/**
		 * organizationCode
		 * 组织机构代码证
		 */
		public static final String ORGANIZATIONCODE = "organizationCode";
		/**
		 * bankName
		 * 银行名
		 */
		public static final String BANKNAME = "bankName";
		/**
		 * commodityType
		 * 类目
		 */
		public static final String COMMODITYTYPE = "commodityType";
		/**
		 * brandNameCh
		 * 中文品牌
		 */
		public static final String BRANDNAMECH = "brandNameCh";
		/**
		 * registerCapital
		 * 注册资本
		 */
		public static final String REGISTERCAPITAL = "registerCapital";
		/**
		 * brandNameEn
		 * 英文品牌
		 */
		public static final String BRANDNAMEEN = "brandNameEn";
		/**
		 * pageNo
		 * 页码
		 */
		public static final String PAGENO = "pageNo";
		/**
		 * pageSize
		 * 页数
		 */
		public static final String PAGESIZE = "pageSize";
	}

}
