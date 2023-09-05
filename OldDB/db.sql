USE [SmartGarage_Default_v1]
GO
/****** Object:  Table [dbo].[Accounts]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Accounts](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[HeadCode] [bigint] NOT NULL,
	[HeadName] [nvarchar](100) NOT NULL,
	[ParentHead] [bigint] NULL,
	[PHeadName] [nvarchar](100) NULL,
	[HeadLevel] [int] NOT NULL,
	[HeadType] [nvarchar](1) NOT NULL,
	[IsTransaction] [bit] NOT NULL,
	[IsGL] [bit] NOT NULL,
	[IsBudget] [bit] NOT NULL,
	[IsDepreciation] [bit] NOT NULL,
	[CustomerId] [bigint] NULL,
	[SupplierId] [bigint] NULL,
	[DepreciationRate] [float] NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[EmployeeId] [bigint] NULL,
	[ExpenseTypeId] [bigint] NULL,
	[BankId] [bigint] NULL,
 CONSTRAINT [PK_Accounts] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AgendaDecisions]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AgendaDecisions](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Description] [nvarchar](4000) NOT NULL,
	[DueDate] [datetime] NULL,
	[AssignedTo] [bigint] NULL,
	[DecisionNumber] [int] NULL,
	[RelatedAgendaItem] [bigint] NULL,
	[ResolutionStatus] [bigint] NOT NULL,
	[Images] [nvarchar](4000) NULL,
	[Attachments] [nvarchar](4000) NULL,
	[Meeting] [bigint] NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_AgendaDecisions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AgendaItems]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AgendaItems](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](250) NOT NULL,
	[Description] [nvarchar](4000) NULL,
	[ItemType] [bigint] NOT NULL,
	[RequestedBy] [bigint] NULL,
	[SequenceNo] [int] NOT NULL,
	[Images] [nvarchar](4000) NULL,
	[Attachments] [nvarchar](4000) NULL,
	[Meeting] [bigint] NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_AgendaItems] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AgendaItemTypes]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AgendaItemTypes](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_AgendaItemTypes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AssemblyTypes]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AssemblyTypes](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
 CONSTRAINT [PK_AssemblyTypes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Attendance]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Attendance](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[EmployeeId] [bigint] NOT NULL,
	[CheckIn] [datetime] NULL,
	[CheckOut] [datetime] NULL,
 CONSTRAINT [PK_Attendance] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AttendanceStatuses]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AttendanceStatuses](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_AttendanceStatuses] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AttendeeTypes]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AttendeeTypes](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_AttendeeTypes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Banks]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Banks](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[BankName] [nvarchar](250) NOT NULL,
	[ACName] [nvarchar](250) NOT NULL,
	[ACNumber] [nvarchar](250) NOT NULL,
	[Branch] [nvarchar](250) NOT NULL,
	[SignaturePicture] [nvarchar](250) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Banks] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Brands]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Brands](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[Description] [nvarchar](4000) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Brands] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Categories]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categories](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[Description] [nvarchar](4000) NULL,
	[ParentCategoryId] [bigint] NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cities]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cities](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[CountryId] [bigint] NOT NULL,
	[StateId] [bigint] NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Cities] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ColorTypes]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ColorTypes](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
 CONSTRAINT [PK_ColorTypes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Companies]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Companies](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[CompanyName] [nvarchar](250) NOT NULL,
	[CompanyEmail] [nvarchar](250) NULL,
	[Address] [nvarchar](500) NULL,
	[Phone] [nvarchar](250) NULL,
	[CurrencyId] [bigint] NULL,
	[VatPercentage] [float] NOT NULL,
	[Logo] [nvarchar](250) NULL,
	[SaleLogo] [nvarchar](250) NULL,
	[Favicon] [nvarchar](250) NULL,
	[CurrencyPosition] [int] NOT NULL,
	[FooterText] [nvarchar](4000) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Companies] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Countries]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Countries](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Countries] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Currencies]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Currencies](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[CurrencyName] [nvarchar](250) NOT NULL,
	[CurrencySymbol] [nvarchar](50) NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Currencies] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CustomerGroups]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CustomerGroups](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[Description] [nvarchar](4000) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_CustomerGroups] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customers]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customers](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[ContactName] [nvarchar](250) NULL,
	[ContactTitle] [nvarchar](250) NULL,
	[CountryId] [bigint] NULL,
	[StateId] [bigint] NULL,
	[CityId] [bigint] NULL,
	[Address] [nvarchar](500) NULL,
	[RegionId] [bigint] NULL,
	[PostalCode] [nvarchar](250) NULL,
	[Phone] [nvarchar](250) NULL,
	[Fax] [nvarchar](250) NULL,
	[Website] [nvarchar](250) NULL,
	[Email] [nvarchar](250) NULL,
	[EmailAddress] [nvarchar](250) NULL,
	[PreviousCreditBalance] [float] NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[CustomerGroupId] [bigint] NULL,
 CONSTRAINT [PK_Customers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DailyClosing]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DailyClosing](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[LastDayClosing] [float] NOT NULL,
	[CashIn] [float] NOT NULL,
	[CashOut] [float] NOT NULL,
	[Date] [date] NOT NULL,
	[Amount] [float] NOT NULL,
	[Adjustment] [float] NOT NULL,
	[Status] [int] NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
 CONSTRAINT [PK_DailyClosing] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DamagedProducts]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DamagedProducts](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Code] [nvarchar](250) NULL,
	[Name] [nvarchar](250) NOT NULL,
	[CategoryId] [bigint] NOT NULL,
	[PurchasePrice] [float] NOT NULL,
	[Quantity] [float] NOT NULL,
	[Date] [datetime] NOT NULL,
	[Note] [nvarchar](4000) NULL,
	[ProductId] [bigint] NOT NULL,
 CONSTRAINT [PK_DamagedProducts] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Departments]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Departments](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Department] [nvarchar](250) NOT NULL,
	[Description] [nvarchar](4000) NULL,
	[ParentDepartmentId] [bigint] NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Departments] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Designations]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Designations](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Designation] [nvarchar](250) NOT NULL,
	[Description] [nvarchar](4000) NULL,
	[ParentDesignationId] [bigint] NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Designations] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Employees]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employees](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](100) NOT NULL,
	[LastName] [nvarchar](100) NOT NULL,
	[DesignationId] [bigint] NOT NULL,
	[DepartmentId] [bigint] NOT NULL,
	[RateType] [int] NOT NULL,
	[Phone] [nvarchar](250) NOT NULL,
	[HoureRateSalary] [float] NOT NULL,
	[Email] [nvarchar](250) NULL,
	[BloodGroup] [int] NULL,
	[Picture] [nvarchar](250) NULL,
	[CountryId] [bigint] NOT NULL,
	[StateId] [bigint] NOT NULL,
	[CityId] [bigint] NOT NULL,
	[ZipCode] [nvarchar](50) NULL,
	[Address] [nvarchar](4000) NOT NULL,
	[UserId] [int] NULL,
	[RegionId] [bigint] NULL,
	[TerritoryId] [bigint] NULL,
	[CNIC] [nvarchar](250) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Employees] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Exceptions]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Exceptions](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[GUID] [uniqueidentifier] NOT NULL,
	[ApplicationName] [nvarchar](50) NOT NULL,
	[MachineName] [nvarchar](50) NOT NULL,
	[CreationDate] [datetime] NOT NULL,
	[Type] [nvarchar](100) NOT NULL,
	[IsProtected] [bit] NOT NULL,
	[Host] [nvarchar](100) NULL,
	[Url] [nvarchar](500) NULL,
	[HTTPMethod] [nvarchar](10) NULL,
	[IPAddress] [nvarchar](40) NULL,
	[Source] [nvarchar](100) NULL,
	[Message] [nvarchar](1000) NULL,
	[Detail] [nvarchar](max) NULL,
	[StatusCode] [int] NULL,
	[SQL] [nvarchar](max) NULL,
	[DeletionDate] [datetime] NULL,
	[FullJson] [nvarchar](max) NULL,
	[ErrorHash] [int] NULL,
	[DuplicateCount] [int] NOT NULL,
 CONSTRAINT [PK_Exceptions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Expenses]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Expenses](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[ExpenseTypeId] [bigint] NOT NULL,
	[Date] [datetime] NOT NULL,
	[Amount] [float] NOT NULL,
	[PaymentAccount] [bigint] NOT NULL,
	[VNo] [bigint] NOT NULL,
 CONSTRAINT [PK_Expenses] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ExpenseTypes]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ExpenseTypes](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Type] [nvarchar](250) NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_ExpenseTypes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FollowUps]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FollowUps](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[JobOrder] [bigint] NOT NULL,
	[Date] [datetime] NOT NULL,
	[ToWhom] [int] NOT NULL,
	[Note] [nvarchar](4000) NULL,
 CONSTRAINT [PK_FollowUps] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FuelTypes]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FuelTypes](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
 CONSTRAINT [PK_FuelTypes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GatePasses]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GatePasses](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[JobCard] [bigint] NOT NULL,
	[Customer] [bigint] NOT NULL,
	[Vehicle] [bigint] NOT NULL,
	[VehicleOutDate] [datetime] NOT NULL,
 CONSTRAINT [PK_GatePasses] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GoodsIssue]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GoodsIssue](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[CustomerId] [bigint] NOT NULL,
	[SaleId] [bigint] NOT NULL,
	[Date] [datetime] NOT NULL,
	[TotalQuantity] [float] NOT NULL,
	[EmployeenId] [bigint] NULL,
	[Remarks] [nvarchar](4000) NULL,
	[JournalRemarks] [nvarchar](4000) NULL,
	[Reference] [nvarchar](250) NULL,
 CONSTRAINT [PK_GoodsIssue] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GoodsIssueDetails]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GoodsIssueDetails](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[GoodsIssueId] [bigint] NOT NULL,
	[ProductId] [bigint] NOT NULL,
	[ProductName] [nvarchar](250) NULL,
	[Description] [nvarchar](500) NULL,
	[Quantity] [float] NOT NULL,
	[WarehouseId] [bigint] NOT NULL,
	[WarehouseName] [nvarchar](250) NULL,
 CONSTRAINT [PK_GoodsIssueDetails] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GoodsReceipt]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GoodsReceipt](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[SupplierId] [bigint] NOT NULL,
	[PurchaseId] [bigint] NOT NULL,
	[Date] [datetime] NOT NULL,
	[TotalQuantity] [float] NOT NULL,
	[EmployeenId] [bigint] NULL,
	[Remarks] [nvarchar](4000) NULL,
	[JournalRemarks] [nvarchar](4000) NULL,
	[Reference] [nvarchar](250) NULL,
 CONSTRAINT [PK_GoodsReceipt] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GoodsReceiptDetails]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GoodsReceiptDetails](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[GoodsReceiptId] [bigint] NOT NULL,
	[ProductId] [bigint] NOT NULL,
	[ProductName] [nvarchar](250) NULL,
	[Description] [nvarchar](500) NULL,
	[Quantity] [float] NOT NULL,
	[WarehouseId] [bigint] NOT NULL,
	[WarehouseName] [nvarchar](250) NULL,
 CONSTRAINT [PK_GoodsReceiptDetails] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[InspectionChecklist]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InspectionChecklist](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[JobCategory] [bigint] NOT NULL,
	[JobType] [bigint] NOT NULL,
 CONSTRAINT [PK_InspectionChecklist] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[InspectionJobTypes]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InspectionJobTypes](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[InspectionId] [bigint] NOT NULL,
	[JobType] [bigint] NOT NULL,
 CONSTRAINT [PK_InspectionJobTypes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[InvoiceItems]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InvoiceItems](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[ProductId] [bigint] NOT NULL,
	[Description] [nvarchar](500) NULL,
	[UnitId] [bigint] NOT NULL,
	[Quantity] [float] NOT NULL,
	[PurchasePrice] [float] NOT NULL,
	[UnitPrice] [float] NOT NULL,
	[Discount] [float] NOT NULL,
	[Total] [float] NOT NULL,
	[InvoiceId] [bigint] NOT NULL,
 CONSTRAINT [PK_InvoiceItems] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[InvoiceJobItems]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InvoiceJobItems](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[JobType] [bigint] NOT NULL,
	[Description] [nvarchar](500) NULL,
	[UnitPrice] [float] NOT NULL,
	[Discount] [float] NOT NULL,
	[Total] [float] NOT NULL,
	[InvoiceId] [bigint] NOT NULL,
 CONSTRAINT [PK_InvoiceJobItems] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Invoices]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Invoices](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[CustomerId] [bigint] NOT NULL,
	[Jobcard] [bigint] NULL,
	[Vehicle] [bigint] NOT NULL,
	[Date] [datetime] NOT NULL,
	[Discount] [float] NOT NULL,
	[TotalDiscount] [float] NOT NULL,
	[Vat] [float] NOT NULL,
	[TotalTax] [float] NOT NULL,
	[ShippingCost] [float] NOT NULL,
	[GrandTotal] [float] NOT NULL,
	[NetTotal] [float] NOT NULL,
	[PaidAmount] [float] NOT NULL,
	[Due] [float] NOT NULL,
	[Change] [float] NOT NULL,
	[Details] [nvarchar](4000) NULL,
	[PaymentAccount] [bigint] NULL,
	[VNo] [bigint] NOT NULL,
	[ScheduleDatetime] [datetime] NOT NULL,
	[DeliveryDatetime] [datetime] NOT NULL,
 CONSTRAINT [PK_Invoices] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[JobCardDetails]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[JobCardDetails](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[JobType] [bigint] NOT NULL,
	[JobOrder] [bigint] NOT NULL,
	[Mechanic] [bigint] NOT NULL,
	[CustomerNotes] [nvarchar](4000) NULL,
 CONSTRAINT [PK_JobDetails] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[JobCards]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[JobCards](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Customer] [bigint] NOT NULL,
	[WorkOrderNo] [nvarchar](50) NULL,
	[Address] [nvarchar](1000) NULL,
	[Vehicle] [bigint] NOT NULL,
	[Phone] [nvarchar](50) NOT NULL,
	[Reference] [nvarchar](50) NULL,
	[Mobile] [nvarchar](50) NULL,
	[ScheduleDatetime] [datetime] NULL,
	[Website] [nvarchar](250) NULL,
	[DeliveryDatetime] [datetime] NULL,
	[Details] [nvarchar](4000) NULL,
 CONSTRAINT [PK_JobOrders] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[JobCategories]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[JobCategories](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
 CONSTRAINT [PK_JobCategories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[JobTypes]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[JobTypes](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[JobCategory] [bigint] NULL,
	[Name] [nvarchar](250) NOT NULL,
	[Rate] [float] NOT NULL,
	[StandardTiming] [time](7) NULL,
	[IsInspectionList] [bit] NOT NULL,
 CONSTRAINT [PK_JobTypes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Languages]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Languages](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[LanguageId] [nvarchar](10) NOT NULL,
	[LanguageName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Languages] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Locations]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Locations](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[CountryId] [bigint] NULL,
	[StateId] [bigint] NULL,
	[CityId] [bigint] NULL,
	[Address] [nvarchar](1000) NULL,
	[Latitude] [nvarchar](250) NULL,
	[Longitude] [nvarchar](250) NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Locations] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MeetingAttendees]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MeetingAttendees](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[AttendeeType] [bigint] NOT NULL,
	[AttendanceStatus] [bigint] NOT NULL,
	[Attendee] [bigint] NOT NULL,
	[Meeting] [bigint] NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_MeetingAttendees] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Meetings]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Meetings](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[MeetingName] [nvarchar](250) NOT NULL,
	[MeetingType] [bigint] NOT NULL,
	[StartDate] [datetime] NOT NULL,
	[EndDate] [datetime] NOT NULL,
	[Department] [bigint] NULL,
	[Location] [bigint] NOT NULL,
	[OrganizedBy] [bigint] NULL,
	[Reporter] [bigint] NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Meetings] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MeetingTypes]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MeetingTypes](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_MeetingTypes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Barcode] [nvarchar](250) NULL,
	[SN] [nvarchar](250) NULL,
	[ProductName] [nvarchar](250) NULL,
	[Model] [nvarchar](250) NULL,
	[UnitPrice] [float] NOT NULL,
	[UnitsInStock] [float] NOT NULL,
	[UnitsOnOrder] [float] NOT NULL,
	[ReorderLevel] [float] NOT NULL,
	[CategoryId] [bigint] NOT NULL,
	[UnitId] [bigint] NOT NULL,
	[BrandId] [bigint] NULL,
	[Image] [nvarchar](250) NULL,
	[ProductDetails] [nvarchar](4000) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PurchaseDetails]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PurchaseDetails](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[ProductId] [bigint] NOT NULL,
	[ProductName] [nvarchar](250) NULL,
	[Description] [nvarchar](500) NULL,
	[UnitId] [bigint] NOT NULL,
	[UnitName] [nvarchar](250) NULL,
	[Quantity] [float] NOT NULL,
	[UnitPrice] [float] NOT NULL,
	[Discount] [float] NOT NULL,
	[Total] [float] NOT NULL,
	[PurchaseId] [bigint] NOT NULL,
 CONSTRAINT [PK_PurchaseDetails] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Purchases]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Purchases](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[SupplierId] [bigint] NOT NULL,
	[InvoiceNo] [nvarchar](250) NULL,
	[Date] [datetime] NOT NULL,
	[Discount] [float] NOT NULL,
	[TotalDiscount] [float] NOT NULL,
	[ShippingCost] [float] NOT NULL,
	[GrandTotal] [float] NOT NULL,
	[NetTotal] [float] NOT NULL,
	[PaidAmount] [float] NOT NULL,
	[Due] [float] NOT NULL,
	[Change] [float] NOT NULL,
	[Details] [nvarchar](4000) NULL,
	[PaymentAccount] [bigint] NULL,
	[EmployeeId] [bigint] NULL,
	[VNo] [bigint] NOT NULL,
 CONSTRAINT [PK_Purchases] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[QuotationDetails]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[QuotationDetails](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[ProductId] [bigint] NOT NULL,
	[ProductName] [nvarchar](250) NULL,
	[Description] [nvarchar](500) NULL,
	[UnitId] [bigint] NOT NULL,
	[UnitName] [nvarchar](250) NULL,
	[Quantity] [float] NOT NULL,
	[UnitPrice] [float] NOT NULL,
	[Discount] [float] NOT NULL,
	[Total] [float] NOT NULL,
	[QuotationId] [bigint] NOT NULL,
 CONSTRAINT [PK_QuotationDetails] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[QuotationJobItems]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[QuotationJobItems](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[JobType] [bigint] NOT NULL,
	[Description] [nvarchar](500) NULL,
	[UnitPrice] [float] NOT NULL,
	[Discount] [float] NOT NULL,
	[Total] [float] NOT NULL,
	[QuotationId] [bigint] NOT NULL,
 CONSTRAINT [PK_QuotationJobs] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Quotations]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Quotations](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[CustomerId] [bigint] NOT NULL,
	[Vehicle] [bigint] NULL,
	[Date] [datetime] NOT NULL,
	[Discount] [float] NOT NULL,
	[TotalDiscount] [float] NOT NULL,
	[Vat] [float] NOT NULL,
	[TotalTax] [float] NOT NULL,
	[ShippingCost] [float] NOT NULL,
	[GrandTotal] [float] NOT NULL,
	[NetTotal] [float] NOT NULL,
	[Details] [nvarchar](4000) NULL,
	[ExpiryDate] [datetime] NOT NULL,
 CONSTRAINT [PK_Quotations] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Regions]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Regions](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Regions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ResolutionStatuses]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ResolutionStatuses](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_ResolutionStatuses] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RolePermissions]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RolePermissions](
	[RolePermissionId] [bigint] IDENTITY(1,1) NOT NULL,
	[RoleId] [int] NOT NULL,
	[PermissionKey] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_RolePermissions] PRIMARY KEY CLUSTERED 
(
	[RolePermissionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Roles]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles](
	[RoleId] [int] IDENTITY(1,1) NOT NULL,
	[RoleName] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_Roles] PRIMARY KEY CLUSTERED 
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SaleDetails]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SaleDetails](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[ProductId] [bigint] NOT NULL,
	[ProductName] [nvarchar](250) NULL,
	[Description] [nvarchar](500) NULL,
	[UnitId] [bigint] NOT NULL,
	[UnitName] [nvarchar](250) NULL,
	[Quantity] [float] NOT NULL,
	[PurchasePrice] [float] NOT NULL,
	[UnitPrice] [float] NOT NULL,
	[Discount] [float] NOT NULL,
	[Total] [float] NOT NULL,
	[SaleId] [bigint] NOT NULL,
 CONSTRAINT [PK_SaleDetails] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Sales]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sales](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[CustomerId] [bigint] NOT NULL,
	[Date] [datetime] NOT NULL,
	[Discount] [float] NOT NULL,
	[TotalDiscount] [float] NOT NULL,
	[Vat] [float] NOT NULL,
	[TotalTax] [float] NOT NULL,
	[ShippingCost] [float] NOT NULL,
	[GrandTotal] [float] NOT NULL,
	[NetTotal] [float] NOT NULL,
	[PaidAmount] [float] NOT NULL,
	[Due] [float] NOT NULL,
	[Change] [float] NOT NULL,
	[Details] [nvarchar](4000) NULL,
	[PaymentAccount] [bigint] NULL,
	[VNo] [bigint] NOT NULL,
 CONSTRAINT [PK_Sales] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Shippers]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Shippers](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[CompanyName] [nvarchar](250) NOT NULL,
	[Phone] [nvarchar](250) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Shippers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[States]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[States](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[CountryId] [bigint] NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_States] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SupplierGroups]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SupplierGroups](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[Description] [nvarchar](4000) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_SupplierGroups] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Suppliers]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Suppliers](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[CompanyName] [nvarchar](250) NOT NULL,
	[CountryId] [bigint] NULL,
	[StateId] [bigint] NULL,
	[CityId] [bigint] NULL,
	[ContactName] [nvarchar](250) NULL,
	[ContactTitle] [nvarchar](250) NULL,
	[Address] [nvarchar](500) NULL,
	[RegionId] [bigint] NULL,
	[PostalCode] [nvarchar](250) NULL,
	[Phone] [nvarchar](250) NULL,
	[Fax] [nvarchar](250) NULL,
	[Website] [nvarchar](250) NULL,
	[Email] [nvarchar](250) NULL,
	[EmailAddress] [nvarchar](250) NULL,
	[PreviousCreditBalance] [float] NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[SupplierGroupId] [bigint] NULL,
 CONSTRAINT [PK_Suppliers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Territories]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Territories](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[TerritoryDescription] [nvarchar](250) NOT NULL,
	[RegionId] [bigint] NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Territories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Transactions]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Transactions](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[VNo] [nvarchar](50) NOT NULL,
	[Vtype] [nvarchar](50) NOT NULL,
	[VDate] [datetime] NOT NULL,
	[COAId] [bigint] NOT NULL,
	[COA] [nvarchar](50) NOT NULL,
	[Narration] [text] NOT NULL,
	[Debit] [float] NOT NULL,
	[Credit] [float] NOT NULL,
	[IsPosted] [bit] NOT NULL,
	[IsAppove] [bit] NOT NULL,
	[IsOpening] [bit] NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
 CONSTRAINT [PK_Transactions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Units]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Units](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[Description] [nvarchar](4000) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Units] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserPermissions]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserPermissions](
	[UserPermissionId] [bigint] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[PermissionKey] [nvarchar](100) NOT NULL,
	[Granted] [bit] NOT NULL,
 CONSTRAINT [PK_UserPermissions] PRIMARY KEY CLUSTERED 
(
	[UserPermissionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserPreferences]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserPreferences](
	[UserPreferenceId] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [bigint] NOT NULL,
	[PreferenceType] [nvarchar](100) NOT NULL,
	[Name] [nvarchar](200) NOT NULL,
	[Value] [nvarchar](max) NULL,
 CONSTRAINT [PK_UserPreferences] PRIMARY KEY CLUSTERED 
(
	[UserPreferenceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserRoles]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserRoles](
	[UserRoleId] [bigint] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[RoleId] [int] NOT NULL,
 CONSTRAINT [PK_UserRoles] PRIMARY KEY CLUSTERED 
(
	[UserRoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](100) NOT NULL,
	[DisplayName] [nvarchar](100) NOT NULL,
	[Email] [nvarchar](100) NULL,
	[Source] [nvarchar](4) NOT NULL,
	[PasswordHash] [nvarchar](86) NOT NULL,
	[PasswordSalt] [nvarchar](10) NOT NULL,
	[LastDirectoryUpdate] [datetime] NULL,
	[UserImage] [nvarchar](100) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [smallint] NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VehicleBookings]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VehicleBookings](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](250) NOT NULL,
	[BookingDateTime] [datetime] NOT NULL,
	[Customer] [bigint] NOT NULL,
	[Vehicle] [bigint] NOT NULL,
	[Note] [nvarchar](4000) NULL,
 CONSTRAINT [PK_VehicleBookings] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VehicleCourtesyBooking]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VehicleCourtesyBooking](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](250) NOT NULL,
	[StartDateTime] [datetime] NOT NULL,
	[EndDateTime] [datetime] NOT NULL,
	[Customer] [bigint] NOT NULL,
	[Vehicle] [bigint] NOT NULL,
	[Note] [nvarchar](4000) NULL,
 CONSTRAINT [PK_VehicleCourtesyBooking] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VehicleMakes]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VehicleMakes](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
 CONSTRAINT [PK_VehicleMakes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VehicleModels]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VehicleModels](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
 CONSTRAINT [PK_VehicleModels] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Vehicles]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Vehicles](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[CustomerId] [bigint] NOT NULL,
	[VehicleRegistration] [nvarchar](250) NOT NULL,
	[Year] [int] NULL,
	[Seats] [int] NULL,
	[Make] [bigint] NULL,
	[CCRating] [nvarchar](250) NULL,
	[Model] [bigint] NULL,
	[FuelType] [bigint] NULL,
	[Color] [bigint] NULL,
	[AssemblyType] [bigint] NULL,
	[SecondColor] [bigint] NULL,
	[CountryOfOrigin] [bigint] NULL,
	[SubModel] [nvarchar](250) NULL,
	[GrossVehicleMass] [int] NULL,
	[BodyStyle] [nvarchar](250) NULL,
	[TareWeight] [nvarchar](250) NULL,
	[Axles] [nvarchar](250) NULL,
	[Wheelbase] [nvarchar](250) NULL,
	[EngineNo] [nvarchar](250) NOT NULL,
	[FrontAxleGroupRating] [nvarchar](250) NULL,
	[VehicleType] [bigint] NULL,
	[RearAxleGroupRating] [nvarchar](250) NULL,
	[Brand] [bigint] NOT NULL,
 CONSTRAINT [PK_Vehicles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VehicleTypes]    Script Date: 3/31/2021 4:53:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VehicleTypes](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
 CONSTRAINT [PK_VehicleTypes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VersionInfo]    Script Date: 3/31/2021 4:53:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VersionInfo](
	[Version] [bigint] NOT NULL,
	[AppliedOn] [datetime] NULL,
	[Description] [nvarchar](1024) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Warehouses]    Script Date: 3/31/2021 4:53:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Warehouses](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[Description] [nvarchar](500) NULL,
	[CountryId] [bigint] NULL,
	[StateId] [bigint] NULL,
	[CityId] [bigint] NULL,
	[Phone] [nvarchar](250) NULL,
	[Address] [nvarchar](500) NULL,
	[InsertDate] [datetime] NULL,
	[InsertUserId] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[DeleteDate] [datetime] NULL,
	[DeleteUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [PK_Warehouses] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Accounts] ON 
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (1, 1, N'Assets', NULL, N'COA', 1, N'A', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:26:07.297' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (2, 2, N'Equity', NULL, N'COA', 1, N'L', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:26:22.427' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (3, 3, N'Income', NULL, N'COA', 1, N'I', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:26:31.683' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (4, 4, N'Expence', NULL, N'COA', 1, N'E', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:26:40.143' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (5, 5, N'Liabilities', NULL, N'COA', 1, N'L', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:26:54.223' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (6, 101, N'Non Current Assets', 1, N'Assets', 2, N'A', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:27:22.113' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (7, 102, N'Current Asset', 1, N'Assets', 2, N'A', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:28:05.907' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (8, 10101, N'Inventory', 6, N'Non Current Assets', 3, N'A', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:31:37.187' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (9, 10102, N'Service Receive', 6, N'Non Current Assets', 3, N'A', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:32:06.007' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (10, 10201, N'Cash & Cash Equivalent', 7, N'Current Asset', 3, N'A', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:32:54.037' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (11, 10202, N'Account Receivable', 7, N'Current Asset', 3, N'A', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:33:34.010' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (12, 1020201, N'Customer Receivable', 11, N'Account Receivable', 4, N'A', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:34:27.590' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (13, 1020202, N'Loan Receivable', 11, N'Account Receivable', 4, N'A', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:34:49.920' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (14, 1020203, N'Cash In Hand', 10, N'Cash & Cash Equivalent', 4, N'A', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:35:17.623' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (15, 1020204, N'Cash At Bank', 10, N'Cash & Cash Equivalent', 4, N'A', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:35:40.100' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (16, 301, N'Product Sale', 3, N'Income', 2, N'I', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:36:23.947' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (17, 302, N'Service Income', 3, N'Income', 2, N'I', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:36:37.280' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (18, 401, N'Default expense', 4, N'Expence', 2, N'E', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:37:40.657' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (19, 402, N'Product Purchase', 4, N'Expence', 2, N'E', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:37:52.893' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (20, 403, N'Employee Salary', 4, N'Expence', 2, N'E', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:38:05.280' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (21, 501, N'Non Current Liabilities', 5, N'Liabilities', 2, N'L', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:38:31.247' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (22, 502, N'Current Liabilities', 5, N'Liabilities', 2, N'L', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:38:46.100' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (23, 50201, N'Account Payable', 22, N'Current Liabilities', 3, N'L', 0, 1, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:39:02.270' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (24, 50202, N'Tax', 22, N'Current Liabilities', 3, N'L', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:39:22.153' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (25, 50203, N'Employee Ledger', 22, N'Current Liabilities', 3, N'L', 0, 0, 0, 0, NULL, NULL, 0, CAST(N'2020-11-25T17:39:51.353' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
INSERT [dbo].[Accounts] ([Id], [HeadCode], [HeadName], [ParentHead], [PHeadName], [HeadLevel], [HeadType], [IsTransaction], [IsGL], [IsBudget], [IsDepreciation], [CustomerId], [SupplierId], [DepreciationRate], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [EmployeeId], [ExpenseTypeId], [BankId]) VALUES (26, 102020000001, N'1 - Walking Customer', 11, N'Account Receivable', 4, N'A', 1, 0, 0, 0, 1, NULL, 0, CAST(N'2020-12-03T20:22:53.077' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL)
GO
SET IDENTITY_INSERT [dbo].[Accounts] OFF
GO
SET IDENTITY_INSERT [dbo].[AttendanceStatuses] ON 
GO
INSERT [dbo].[AttendanceStatuses] ([Id], [Name], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive]) VALUES (1, N'Not Set', NULL, NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[AttendanceStatuses] ([Id], [Name], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive]) VALUES (2, N'Attended', NULL, NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[AttendanceStatuses] ([Id], [Name], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive]) VALUES (3, N'Absent', NULL, NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[AttendanceStatuses] ([Id], [Name], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive]) VALUES (4, N'Absent with Permission', NULL, NULL, NULL, NULL, NULL, NULL, 1)
GO
SET IDENTITY_INSERT [dbo].[AttendanceStatuses] OFF
GO
SET IDENTITY_INSERT [dbo].[AttendeeTypes] ON 
GO
INSERT [dbo].[AttendeeTypes] ([Id], [Name], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive]) VALUES (1, N'Attendee', NULL, NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[AttendeeTypes] ([Id], [Name], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive]) VALUES (2, N'Guest', NULL, NULL, NULL, NULL, NULL, NULL, 1)
GO
SET IDENTITY_INSERT [dbo].[AttendeeTypes] OFF
GO
SET IDENTITY_INSERT [dbo].[Customers] ON 
GO
INSERT [dbo].[Customers] ([Id], [Name], [ContactName], [ContactTitle], [CountryId], [StateId], [CityId], [Address], [RegionId], [PostalCode], [Phone], [Fax], [Website], [Email], [EmailAddress], [PreviousCreditBalance], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive], [CustomerGroupId]) VALUES (1, N'Walking Customer', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, CAST(N'2020-10-17T16:13:29.123' AS DateTime), 1, NULL, NULL, NULL, NULL, 1, NULL)
GO
SET IDENTITY_INSERT [dbo].[Customers] OFF
GO
SET IDENTITY_INSERT [dbo].[Languages] ON 
GO
INSERT [dbo].[Languages] ([Id], [LanguageId], [LanguageName]) VALUES (1, N'en', N'English')
GO
INSERT [dbo].[Languages] ([Id], [LanguageId], [LanguageName]) VALUES (2, N'ru', N'Russian')
GO
INSERT [dbo].[Languages] ([Id], [LanguageId], [LanguageName]) VALUES (3, N'es', N'Spanish')
GO
INSERT [dbo].[Languages] ([Id], [LanguageId], [LanguageName]) VALUES (4, N'tr', N'Turkish')
GO
INSERT [dbo].[Languages] ([Id], [LanguageId], [LanguageName]) VALUES (5, N'de', N'German')
GO
INSERT [dbo].[Languages] ([Id], [LanguageId], [LanguageName]) VALUES (6, N'zh-CN', N'Chinese (Simplified)')
GO
INSERT [dbo].[Languages] ([Id], [LanguageId], [LanguageName]) VALUES (7, N'it', N'Italian')
GO
INSERT [dbo].[Languages] ([Id], [LanguageId], [LanguageName]) VALUES (8, N'pt', N'Portuguese')
GO
INSERT [dbo].[Languages] ([Id], [LanguageId], [LanguageName]) VALUES (9, N'pt-BR', N'Portuguese (Brazil)')
GO
INSERT [dbo].[Languages] ([Id], [LanguageId], [LanguageName]) VALUES (10, N'fa', N'Farsi')
GO
INSERT [dbo].[Languages] ([Id], [LanguageId], [LanguageName]) VALUES (11, N'vi-VN', N'Vietnamese (Vietnam)')
GO
SET IDENTITY_INSERT [dbo].[Languages] OFF
GO
SET IDENTITY_INSERT [dbo].[ResolutionStatuses] ON 
GO
INSERT [dbo].[ResolutionStatuses] ([Id], [Name], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive]) VALUES (1, N'Unknown', NULL, NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[ResolutionStatuses] ([Id], [Name], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive]) VALUES (2, N'In Progress', NULL, NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[ResolutionStatuses] ([Id], [Name], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive]) VALUES (3, N'Overdue', NULL, NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[ResolutionStatuses] ([Id], [Name], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive]) VALUES (4, N'Postponed', NULL, NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[ResolutionStatuses] ([Id], [Name], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive]) VALUES (5, N'Unresolved', NULL, NULL, NULL, NULL, NULL, NULL, 1)
GO
INSERT [dbo].[ResolutionStatuses] ([Id], [Name], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [DeleteDate], [DeleteUserId], [IsActive]) VALUES (6, N'Resolved', NULL, NULL, NULL, NULL, NULL, NULL, 1)
GO
SET IDENTITY_INSERT [dbo].[ResolutionStatuses] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 
GO
INSERT [dbo].[Users] ([UserId], [Username], [DisplayName], [Email], [Source], [PasswordHash], [PasswordSalt], [LastDirectoryUpdate], [UserImage], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive]) VALUES (1, N'admin', N'admin', N'admin@dummy.com', N'site', N'DGIVMpMHCq+bNUo2abZiuYw1A5jZh6zAuIdfFWE5+vAwmXIMVvTUIVMgsogdTZ7+UbYEQY4K7PF6mvMsCIeJ/w', N'vcpzy', NULL, NULL, CAST(N'2014-01-01T00:00:00.000' AS DateTime), 1, NULL, NULL, 1)
GO
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
INSERT [dbo].[VersionInfo] ([Version], [AppliedOn], [Description]) VALUES (20141103140000, CAST(N'2020-12-03T15:22:52.000' AS DateTime), N'DefaultDB_20141103_140000_Initial')
GO
INSERT [dbo].[VersionInfo] ([Version], [AppliedOn], [Description]) VALUES (20141111113000, CAST(N'2020-12-03T15:22:52.000' AS DateTime), N'DefaultDB_20141111_113000_Permissions')
GO
INSERT [dbo].[VersionInfo] ([Version], [AppliedOn], [Description]) VALUES (20160515072600, CAST(N'2020-12-03T15:22:52.000' AS DateTime), N'DefaultDB_20160515_072600_UserPreferences')
GO
INSERT [dbo].[VersionInfo] ([Version], [AppliedOn], [Description]) VALUES (20161029130000, CAST(N'2020-12-03T15:22:52.000' AS DateTime), N'DefaultDB_20161029_130000_ExceptionLog')
GO
INSERT [dbo].[VersionInfo] ([Version], [AppliedOn], [Description]) VALUES (20201115140000, CAST(N'2020-12-03T15:22:53.000' AS DateTime), N'DefaultDB_20201115_140000_InitialDBScript')
GO
ALTER TABLE [dbo].[Accounts] ADD  CONSTRAINT [DF_Accounts_HeadLevel]  DEFAULT ((0)) FOR [HeadLevel]
GO
ALTER TABLE [dbo].[Accounts] ADD  CONSTRAINT [DF_Accounts_IsTransaction]  DEFAULT ((0)) FOR [IsTransaction]
GO
ALTER TABLE [dbo].[Accounts] ADD  CONSTRAINT [DF_Accounts_IsGL]  DEFAULT ((0)) FOR [IsGL]
GO
ALTER TABLE [dbo].[Accounts] ADD  CONSTRAINT [DF_Accounts_IsBudget]  DEFAULT ((0)) FOR [IsBudget]
GO
ALTER TABLE [dbo].[Accounts] ADD  CONSTRAINT [DF_Accounts_IsDepreciation]  DEFAULT ((0)) FOR [IsDepreciation]
GO
ALTER TABLE [dbo].[Accounts] ADD  CONSTRAINT [DF_Accounts_DepreciationRate]  DEFAULT ((0)) FOR [DepreciationRate]
GO
ALTER TABLE [dbo].[Accounts] ADD  CONSTRAINT [DF_Accounts_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[AgendaDecisions] ADD  CONSTRAINT [DF_AgendaDecisions_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[AgendaItems] ADD  CONSTRAINT [DF_AgendaItems_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[AgendaItemTypes] ADD  CONSTRAINT [DF_AgendaItemTypes_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[AttendanceStatuses] ADD  CONSTRAINT [DF_AttendanceStatuses_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[AttendeeTypes] ADD  CONSTRAINT [DF_AttendeeTypes_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Banks] ADD  CONSTRAINT [DF_Banks_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Brands] ADD  CONSTRAINT [DF_Brands_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Categories] ADD  CONSTRAINT [DF_Categories_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Cities] ADD  CONSTRAINT [DF_Cities_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Companies] ADD  CONSTRAINT [DF_Companies_VatPercentage]  DEFAULT ((0)) FOR [VatPercentage]
GO
ALTER TABLE [dbo].[Companies] ADD  CONSTRAINT [DF_Companies_CurrencyPosition]  DEFAULT ((1)) FOR [CurrencyPosition]
GO
ALTER TABLE [dbo].[Companies] ADD  CONSTRAINT [DF_Companies_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Countries] ADD  CONSTRAINT [DF_Countries_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Currencies] ADD  CONSTRAINT [DF_Currencies_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[CustomerGroups] ADD  CONSTRAINT [DF_CustomerGroups_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Customers] ADD  CONSTRAINT [DF_Customers_PreviousCreditBalance]  DEFAULT ((0)) FOR [PreviousCreditBalance]
GO
ALTER TABLE [dbo].[Customers] ADD  CONSTRAINT [DF_Customers_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[DailyClosing] ADD  CONSTRAINT [DF_DailyClosing_LastDayClosing]  DEFAULT ((0)) FOR [LastDayClosing]
GO
ALTER TABLE [dbo].[DailyClosing] ADD  CONSTRAINT [DF_DailyClosing_CashIn]  DEFAULT ((0)) FOR [CashIn]
GO
ALTER TABLE [dbo].[DailyClosing] ADD  CONSTRAINT [DF_DailyClosing_CashOut]  DEFAULT ((0)) FOR [CashOut]
GO
ALTER TABLE [dbo].[DailyClosing] ADD  CONSTRAINT [DF_DailyClosing_Date]  DEFAULT (getdate()) FOR [Date]
GO
ALTER TABLE [dbo].[DailyClosing] ADD  CONSTRAINT [DF_DailyClosing_Amount]  DEFAULT ((0)) FOR [Amount]
GO
ALTER TABLE [dbo].[DailyClosing] ADD  CONSTRAINT [DF_DailyClosing_Adjustment]  DEFAULT ((0)) FOR [Adjustment]
GO
ALTER TABLE [dbo].[DailyClosing] ADD  CONSTRAINT [DF_DailyClosing_Status]  DEFAULT ((1)) FOR [Status]
GO
ALTER TABLE [dbo].[DamagedProducts] ADD  CONSTRAINT [DF_DamagedProducts_PurchasePrice]  DEFAULT ((0)) FOR [PurchasePrice]
GO
ALTER TABLE [dbo].[DamagedProducts] ADD  CONSTRAINT [DF_DamagedProducts_Quantity]  DEFAULT ((0)) FOR [Quantity]
GO
ALTER TABLE [dbo].[Departments] ADD  CONSTRAINT [DF_Departments_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Designations] ADD  CONSTRAINT [DF_Designations_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Employees] ADD  CONSTRAINT [DF_Employees_RateType]  DEFAULT ((1)) FOR [RateType]
GO
ALTER TABLE [dbo].[Employees] ADD  CONSTRAINT [DF_Employees_HoureRateSalary]  DEFAULT ((0)) FOR [HoureRateSalary]
GO
ALTER TABLE [dbo].[Employees] ADD  CONSTRAINT [DF_Employees_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Exceptions] ADD  CONSTRAINT [DF_Exceptions_IsProtected]  DEFAULT ((1)) FOR [IsProtected]
GO
ALTER TABLE [dbo].[Exceptions] ADD  CONSTRAINT [DF_Exceptions_DuplicateCount]  DEFAULT ((1)) FOR [DuplicateCount]
GO
ALTER TABLE [dbo].[Expenses] ADD  CONSTRAINT [DF_Expenses_Date]  DEFAULT (getdate()) FOR [Date]
GO
ALTER TABLE [dbo].[Expenses] ADD  CONSTRAINT [DF_Expenses_Amount]  DEFAULT ((0)) FOR [Amount]
GO
ALTER TABLE [dbo].[ExpenseTypes] ADD  CONSTRAINT [DF_ExpenseTypes_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[GoodsIssue] ADD  CONSTRAINT [DF_GoodsIssue_Date]  DEFAULT (getdate()) FOR [Date]
GO
ALTER TABLE [dbo].[GoodsIssue] ADD  CONSTRAINT [DF_Table1_GrandTotal]  DEFAULT ((0)) FOR [TotalQuantity]
GO
ALTER TABLE [dbo].[GoodsReceipt] ADD  CONSTRAINT [DF_GoodsReceipt_Date]  DEFAULT (getdate()) FOR [Date]
GO
ALTER TABLE [dbo].[GoodsReceipt] ADD  CONSTRAINT [DF_GoodsReceipt_TotalQuantity]  DEFAULT ((0)) FOR [TotalQuantity]
GO
ALTER TABLE [dbo].[InvoiceItems] ADD  CONSTRAINT [DF_InvoiceItems_PurchasePrice]  DEFAULT ((0)) FOR [PurchasePrice]
GO
ALTER TABLE [dbo].[InvoiceItems] ADD  CONSTRAINT [DF_InvoiceItems_Discount]  DEFAULT ((0)) FOR [Discount]
GO
ALTER TABLE [dbo].[InvoiceJobItems] ADD  CONSTRAINT [DF_InvoiceJobItems_Discount]  DEFAULT ((0)) FOR [Discount]
GO
ALTER TABLE [dbo].[Invoices] ADD  CONSTRAINT [DF_Invoices_Date]  DEFAULT (getdate()) FOR [Date]
GO
ALTER TABLE [dbo].[Invoices] ADD  CONSTRAINT [DF_Invoices_Discount]  DEFAULT ((0)) FOR [Discount]
GO
ALTER TABLE [dbo].[Invoices] ADD  CONSTRAINT [DF_Invoices_TotalDiscount]  DEFAULT ((0)) FOR [TotalDiscount]
GO
ALTER TABLE [dbo].[Invoices] ADD  CONSTRAINT [DF_Invoices_Vat]  DEFAULT ((0)) FOR [Vat]
GO
ALTER TABLE [dbo].[Invoices] ADD  CONSTRAINT [DF_Invoices_TotalTax]  DEFAULT ((0)) FOR [TotalTax]
GO
ALTER TABLE [dbo].[Invoices] ADD  CONSTRAINT [DF_Invoices_ShippingCost]  DEFAULT ((0)) FOR [ShippingCost]
GO
ALTER TABLE [dbo].[Invoices] ADD  CONSTRAINT [DF_Invoices_GrandTotal]  DEFAULT ((0)) FOR [GrandTotal]
GO
ALTER TABLE [dbo].[Invoices] ADD  CONSTRAINT [DF_Invoices_NetTotal]  DEFAULT ((0)) FOR [NetTotal]
GO
ALTER TABLE [dbo].[Invoices] ADD  CONSTRAINT [DF_Invoices_PaidAmount]  DEFAULT ((0)) FOR [PaidAmount]
GO
ALTER TABLE [dbo].[Invoices] ADD  CONSTRAINT [DF_Invoices_Due]  DEFAULT ((0)) FOR [Due]
GO
ALTER TABLE [dbo].[Invoices] ADD  CONSTRAINT [DF_Invoices_Change]  DEFAULT ((0)) FOR [Change]
GO
ALTER TABLE [dbo].[JobTypes] ADD  CONSTRAINT [DF_JobTypes_Rate]  DEFAULT ((0)) FOR [Rate]
GO
ALTER TABLE [dbo].[JobTypes] ADD  CONSTRAINT [DF_JobTypes_IsInspectionList]  DEFAULT ((0)) FOR [IsInspectionList]
GO
ALTER TABLE [dbo].[Locations] ADD  CONSTRAINT [DF_Locations_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[MeetingAttendees] ADD  CONSTRAINT [DF_MeetingAttendees_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Meetings] ADD  CONSTRAINT [DF_Meetings_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[MeetingTypes] ADD  CONSTRAINT [DF_MeetingTypes_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Products] ADD  CONSTRAINT [DF_Products_UnitPrice]  DEFAULT ((0)) FOR [UnitPrice]
GO
ALTER TABLE [dbo].[Products] ADD  CONSTRAINT [DF_Products_UnitsInStock]  DEFAULT ((0)) FOR [UnitsInStock]
GO
ALTER TABLE [dbo].[Products] ADD  CONSTRAINT [DF_Products_UnitsOnOrder]  DEFAULT ((0)) FOR [UnitsOnOrder]
GO
ALTER TABLE [dbo].[Products] ADD  CONSTRAINT [DF_Products_ReorderLevel]  DEFAULT ((10)) FOR [ReorderLevel]
GO
ALTER TABLE [dbo].[Products] ADD  CONSTRAINT [DF_Products_IsActive_1]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[PurchaseDetails] ADD  CONSTRAINT [DF_PurchaseDetails_Discount]  DEFAULT ((0)) FOR [Discount]
GO
ALTER TABLE [dbo].[Purchases] ADD  CONSTRAINT [DF_Purchases_Date]  DEFAULT (getdate()) FOR [Date]
GO
ALTER TABLE [dbo].[Purchases] ADD  CONSTRAINT [DF_Table_1_SaleDiscount]  DEFAULT ((0)) FOR [Discount]
GO
ALTER TABLE [dbo].[Purchases] ADD  CONSTRAINT [DF_Purchases_TotalDiscount]  DEFAULT ((0)) FOR [TotalDiscount]
GO
ALTER TABLE [dbo].[Purchases] ADD  CONSTRAINT [DF_Purchases_ShippingCost]  DEFAULT ((0)) FOR [ShippingCost]
GO
ALTER TABLE [dbo].[Purchases] ADD  CONSTRAINT [DF_Purchases_GrandTotal]  DEFAULT ((0)) FOR [GrandTotal]
GO
ALTER TABLE [dbo].[Purchases] ADD  CONSTRAINT [DF_Purchases_NetTotal]  DEFAULT ((0)) FOR [NetTotal]
GO
ALTER TABLE [dbo].[Purchases] ADD  CONSTRAINT [DF_Purchases_PaidAmount]  DEFAULT ((0)) FOR [PaidAmount]
GO
ALTER TABLE [dbo].[Purchases] ADD  CONSTRAINT [DF_Purchases_Due]  DEFAULT ((0)) FOR [Due]
GO
ALTER TABLE [dbo].[Purchases] ADD  CONSTRAINT [DF_Purchases_Change]  DEFAULT ((0)) FOR [Change]
GO
ALTER TABLE [dbo].[QuotationDetails] ADD  CONSTRAINT [DF_QuotationDetails_Discount]  DEFAULT ((0)) FOR [Discount]
GO
ALTER TABLE [dbo].[QuotationJobItems] ADD  CONSTRAINT [DF_QuotationJobs_Discount]  DEFAULT ((0)) FOR [Discount]
GO
ALTER TABLE [dbo].[Quotations] ADD  CONSTRAINT [DF_Quotations_Date]  DEFAULT (getdate()) FOR [Date]
GO
ALTER TABLE [dbo].[Quotations] ADD  CONSTRAINT [DF_Quotations_Discount]  DEFAULT ((0)) FOR [Discount]
GO
ALTER TABLE [dbo].[Quotations] ADD  CONSTRAINT [DF_Quotations_TotalDiscount]  DEFAULT ((0)) FOR [TotalDiscount]
GO
ALTER TABLE [dbo].[Quotations] ADD  CONSTRAINT [DF_Quotations_Vat]  DEFAULT ((0)) FOR [Vat]
GO
ALTER TABLE [dbo].[Quotations] ADD  CONSTRAINT [DF_Quotations_TotalTax]  DEFAULT ((0)) FOR [TotalTax]
GO
ALTER TABLE [dbo].[Quotations] ADD  CONSTRAINT [DF_Quotations_ShippingCost]  DEFAULT ((0)) FOR [ShippingCost]
GO
ALTER TABLE [dbo].[Quotations] ADD  CONSTRAINT [DF_Quotations_GrandTotal]  DEFAULT ((0)) FOR [GrandTotal]
GO
ALTER TABLE [dbo].[Quotations] ADD  CONSTRAINT [DF_Quotations_NetTotal]  DEFAULT ((0)) FOR [NetTotal]
GO
ALTER TABLE [dbo].[Regions] ADD  CONSTRAINT [DF_Regions_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[ResolutionStatuses] ADD  CONSTRAINT [DF_ResolutionStatuses_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[SaleDetails] ADD  CONSTRAINT [DF_SaleDetails_PurchasePrice]  DEFAULT ((0)) FOR [PurchasePrice]
GO
ALTER TABLE [dbo].[SaleDetails] ADD  CONSTRAINT [DF_SaleDetails_Discount]  DEFAULT ((0)) FOR [Discount]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_Date]  DEFAULT (getdate()) FOR [Date]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_SaleDiscount]  DEFAULT ((0)) FOR [Discount]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_TotalDiscount]  DEFAULT ((0)) FOR [TotalDiscount]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_Vat]  DEFAULT ((0)) FOR [Vat]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_TotalTax]  DEFAULT ((0)) FOR [TotalTax]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_ShippingCost]  DEFAULT ((0)) FOR [ShippingCost]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_GrandTotal]  DEFAULT ((0)) FOR [GrandTotal]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_NetTotal]  DEFAULT ((0)) FOR [NetTotal]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_PaidAmount]  DEFAULT ((0)) FOR [PaidAmount]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_Due]  DEFAULT ((0)) FOR [Due]
GO
ALTER TABLE [dbo].[Sales] ADD  CONSTRAINT [DF_Sales_Change]  DEFAULT ((0)) FOR [Change]
GO
ALTER TABLE [dbo].[Shippers] ADD  CONSTRAINT [DF_Shippers_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[States] ADD  CONSTRAINT [DF_States_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[SupplierGroups] ADD  CONSTRAINT [DF_SupplierGroups_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Suppliers] ADD  CONSTRAINT [DF_Suppliers_PreviousCreditBalance]  DEFAULT ((0)) FOR [PreviousCreditBalance]
GO
ALTER TABLE [dbo].[Suppliers] ADD  CONSTRAINT [DF_Suppliers_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Territories] ADD  CONSTRAINT [DF_Territories_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Transactions] ADD  CONSTRAINT [DF_Transactions_VDate]  DEFAULT (getdate()) FOR [VDate]
GO
ALTER TABLE [dbo].[Transactions] ADD  CONSTRAINT [DF_Transactions_Debit]  DEFAULT ((0)) FOR [Debit]
GO
ALTER TABLE [dbo].[Transactions] ADD  CONSTRAINT [DF_Transactions_Credit]  DEFAULT ((0)) FOR [Credit]
GO
ALTER TABLE [dbo].[Transactions] ADD  CONSTRAINT [DF_Transactions_IsPosted]  DEFAULT ((0)) FOR [IsPosted]
GO
ALTER TABLE [dbo].[Transactions] ADD  CONSTRAINT [DF_Transactions_IsAppove]  DEFAULT ((0)) FOR [IsAppove]
GO
ALTER TABLE [dbo].[Transactions] ADD  CONSTRAINT [DF_Transactions_IsOpening]  DEFAULT ((0)) FOR [IsOpening]
GO
ALTER TABLE [dbo].[Units] ADD  CONSTRAINT [DF_Units_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[UserPermissions] ADD  CONSTRAINT [DF_UserPermissions_Granted]  DEFAULT ((1)) FOR [Granted]
GO
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [DF_Users_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Warehouses] ADD  CONSTRAINT [DF_Warehouses_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Accounts]  WITH CHECK ADD  CONSTRAINT [FK_Accounts_Accounts] FOREIGN KEY([ParentHead])
REFERENCES [dbo].[Accounts] ([Id])
GO
ALTER TABLE [dbo].[Accounts] CHECK CONSTRAINT [FK_Accounts_Accounts]
GO
ALTER TABLE [dbo].[Accounts]  WITH CHECK ADD  CONSTRAINT [FK_Accounts_Customers] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[Customers] ([Id])
GO
ALTER TABLE [dbo].[Accounts] CHECK CONSTRAINT [FK_Accounts_Customers]
GO
ALTER TABLE [dbo].[Accounts]  WITH CHECK ADD  CONSTRAINT [FK_Accounts_Suppliers] FOREIGN KEY([SupplierId])
REFERENCES [dbo].[Suppliers] ([Id])
GO
ALTER TABLE [dbo].[Accounts] CHECK CONSTRAINT [FK_Accounts_Suppliers]
GO
ALTER TABLE [dbo].[AgendaDecisions]  WITH CHECK ADD  CONSTRAINT [FK_AgendaDecisions_AgendaItems] FOREIGN KEY([RelatedAgendaItem])
REFERENCES [dbo].[AgendaItems] ([Id])
GO
ALTER TABLE [dbo].[AgendaDecisions] CHECK CONSTRAINT [FK_AgendaDecisions_AgendaItems]
GO
ALTER TABLE [dbo].[AgendaDecisions]  WITH CHECK ADD  CONSTRAINT [FK_AgendaDecisions_Employees] FOREIGN KEY([AssignedTo])
REFERENCES [dbo].[Employees] ([Id])
GO
ALTER TABLE [dbo].[AgendaDecisions] CHECK CONSTRAINT [FK_AgendaDecisions_Employees]
GO
ALTER TABLE [dbo].[AgendaDecisions]  WITH CHECK ADD  CONSTRAINT [FK_AgendaDecisions_Meetings] FOREIGN KEY([Meeting])
REFERENCES [dbo].[Meetings] ([Id])
GO
ALTER TABLE [dbo].[AgendaDecisions] CHECK CONSTRAINT [FK_AgendaDecisions_Meetings]
GO
ALTER TABLE [dbo].[AgendaDecisions]  WITH CHECK ADD  CONSTRAINT [FK_AgendaDecisions_ResolutionStatuses] FOREIGN KEY([ResolutionStatus])
REFERENCES [dbo].[ResolutionStatuses] ([Id])
GO
ALTER TABLE [dbo].[AgendaDecisions] CHECK CONSTRAINT [FK_AgendaDecisions_ResolutionStatuses]
GO
ALTER TABLE [dbo].[AgendaItems]  WITH CHECK ADD  CONSTRAINT [FK_AgendaItems_AgendaItemTypes] FOREIGN KEY([ItemType])
REFERENCES [dbo].[AgendaItemTypes] ([Id])
GO
ALTER TABLE [dbo].[AgendaItems] CHECK CONSTRAINT [FK_AgendaItems_AgendaItemTypes]
GO
ALTER TABLE [dbo].[AgendaItems]  WITH CHECK ADD  CONSTRAINT [FK_AgendaItems_Employees] FOREIGN KEY([RequestedBy])
REFERENCES [dbo].[Employees] ([Id])
GO
ALTER TABLE [dbo].[AgendaItems] CHECK CONSTRAINT [FK_AgendaItems_Employees]
GO
ALTER TABLE [dbo].[AgendaItems]  WITH CHECK ADD  CONSTRAINT [FK_AgendaItems_Meetings] FOREIGN KEY([Meeting])
REFERENCES [dbo].[Meetings] ([Id])
GO
ALTER TABLE [dbo].[AgendaItems] CHECK CONSTRAINT [FK_AgendaItems_Meetings]
GO
ALTER TABLE [dbo].[Attendance]  WITH CHECK ADD  CONSTRAINT [FK_Attendance_Employees] FOREIGN KEY([EmployeeId])
REFERENCES [dbo].[Employees] ([Id])
GO
ALTER TABLE [dbo].[Attendance] CHECK CONSTRAINT [FK_Attendance_Employees]
GO
ALTER TABLE [dbo].[Categories]  WITH CHECK ADD  CONSTRAINT [FK_Categories_Categories] FOREIGN KEY([ParentCategoryId])
REFERENCES [dbo].[Categories] ([Id])
GO
ALTER TABLE [dbo].[Categories] CHECK CONSTRAINT [FK_Categories_Categories]
GO
ALTER TABLE [dbo].[Cities]  WITH CHECK ADD  CONSTRAINT [FK_Cities_Countries] FOREIGN KEY([CountryId])
REFERENCES [dbo].[Countries] ([Id])
GO
ALTER TABLE [dbo].[Cities] CHECK CONSTRAINT [FK_Cities_Countries]
GO
ALTER TABLE [dbo].[Cities]  WITH CHECK ADD  CONSTRAINT [FK_Cities_States] FOREIGN KEY([StateId])
REFERENCES [dbo].[States] ([Id])
GO
ALTER TABLE [dbo].[Cities] CHECK CONSTRAINT [FK_Cities_States]
GO
ALTER TABLE [dbo].[Companies]  WITH CHECK ADD  CONSTRAINT [FK_Companies_Currencies] FOREIGN KEY([CurrencyId])
REFERENCES [dbo].[Currencies] ([Id])
GO
ALTER TABLE [dbo].[Companies] CHECK CONSTRAINT [FK_Companies_Currencies]
GO
ALTER TABLE [dbo].[Customers]  WITH CHECK ADD  CONSTRAINT [FK_Customers_Cities] FOREIGN KEY([CityId])
REFERENCES [dbo].[Cities] ([Id])
GO
ALTER TABLE [dbo].[Customers] CHECK CONSTRAINT [FK_Customers_Cities]
GO
ALTER TABLE [dbo].[Customers]  WITH CHECK ADD  CONSTRAINT [FK_Customers_Countries] FOREIGN KEY([CountryId])
REFERENCES [dbo].[Countries] ([Id])
GO
ALTER TABLE [dbo].[Customers] CHECK CONSTRAINT [FK_Customers_Countries]
GO
ALTER TABLE [dbo].[Customers]  WITH CHECK ADD  CONSTRAINT [FK_Customers_Regions] FOREIGN KEY([RegionId])
REFERENCES [dbo].[Regions] ([Id])
GO
ALTER TABLE [dbo].[Customers] CHECK CONSTRAINT [FK_Customers_Regions]
GO
ALTER TABLE [dbo].[Customers]  WITH CHECK ADD  CONSTRAINT [FK_Customers_States] FOREIGN KEY([StateId])
REFERENCES [dbo].[States] ([Id])
GO
ALTER TABLE [dbo].[Customers] CHECK CONSTRAINT [FK_Customers_States]
GO
ALTER TABLE [dbo].[DamagedProducts]  WITH CHECK ADD  CONSTRAINT [FK_DamagedProducts_Categories] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Categories] ([Id])
GO
ALTER TABLE [dbo].[DamagedProducts] CHECK CONSTRAINT [FK_DamagedProducts_Categories]
GO
ALTER TABLE [dbo].[DamagedProducts]  WITH CHECK ADD  CONSTRAINT [FK_DamagedProducts_Products] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
GO
ALTER TABLE [dbo].[DamagedProducts] CHECK CONSTRAINT [FK_DamagedProducts_Products]
GO
ALTER TABLE [dbo].[Departments]  WITH CHECK ADD  CONSTRAINT [FK_Departments_Departments] FOREIGN KEY([ParentDepartmentId])
REFERENCES [dbo].[Departments] ([Id])
GO
ALTER TABLE [dbo].[Departments] CHECK CONSTRAINT [FK_Departments_Departments]
GO
ALTER TABLE [dbo].[Designations]  WITH CHECK ADD  CONSTRAINT [FK_Designations_Designations] FOREIGN KEY([ParentDesignationId])
REFERENCES [dbo].[Designations] ([Id])
GO
ALTER TABLE [dbo].[Designations] CHECK CONSTRAINT [FK_Designations_Designations]
GO
ALTER TABLE [dbo].[Employees]  WITH CHECK ADD  CONSTRAINT [FK_Employees_Cities] FOREIGN KEY([CityId])
REFERENCES [dbo].[Cities] ([Id])
GO
ALTER TABLE [dbo].[Employees] CHECK CONSTRAINT [FK_Employees_Cities]
GO
ALTER TABLE [dbo].[Employees]  WITH CHECK ADD  CONSTRAINT [FK_Employees_Countries] FOREIGN KEY([CountryId])
REFERENCES [dbo].[Countries] ([Id])
GO
ALTER TABLE [dbo].[Employees] CHECK CONSTRAINT [FK_Employees_Countries]
GO
ALTER TABLE [dbo].[Employees]  WITH CHECK ADD  CONSTRAINT [FK_Employees_Departments] FOREIGN KEY([DepartmentId])
REFERENCES [dbo].[Departments] ([Id])
GO
ALTER TABLE [dbo].[Employees] CHECK CONSTRAINT [FK_Employees_Departments]
GO
ALTER TABLE [dbo].[Employees]  WITH CHECK ADD  CONSTRAINT [FK_Employees_Designations] FOREIGN KEY([DesignationId])
REFERENCES [dbo].[Designations] ([Id])
GO
ALTER TABLE [dbo].[Employees] CHECK CONSTRAINT [FK_Employees_Designations]
GO
ALTER TABLE [dbo].[Employees]  WITH CHECK ADD  CONSTRAINT [FK_Employees_Regions] FOREIGN KEY([RegionId])
REFERENCES [dbo].[Regions] ([Id])
GO
ALTER TABLE [dbo].[Employees] CHECK CONSTRAINT [FK_Employees_Regions]
GO
ALTER TABLE [dbo].[Employees]  WITH CHECK ADD  CONSTRAINT [FK_Employees_States] FOREIGN KEY([StateId])
REFERENCES [dbo].[States] ([Id])
GO
ALTER TABLE [dbo].[Employees] CHECK CONSTRAINT [FK_Employees_States]
GO
ALTER TABLE [dbo].[Employees]  WITH CHECK ADD  CONSTRAINT [FK_Employees_Territories] FOREIGN KEY([TerritoryId])
REFERENCES [dbo].[Territories] ([Id])
GO
ALTER TABLE [dbo].[Employees] CHECK CONSTRAINT [FK_Employees_Territories]
GO
ALTER TABLE [dbo].[Expenses]  WITH CHECK ADD  CONSTRAINT [FK_Expenses_ExpenseTypes] FOREIGN KEY([ExpenseTypeId])
REFERENCES [dbo].[ExpenseTypes] ([Id])
GO
ALTER TABLE [dbo].[Expenses] CHECK CONSTRAINT [FK_Expenses_ExpenseTypes]
GO
ALTER TABLE [dbo].[FollowUps]  WITH CHECK ADD  CONSTRAINT [FK_FollowUps_JobOrders] FOREIGN KEY([JobOrder])
REFERENCES [dbo].[JobCards] ([Id])
GO
ALTER TABLE [dbo].[FollowUps] CHECK CONSTRAINT [FK_FollowUps_JobOrders]
GO
ALTER TABLE [dbo].[GatePasses]  WITH CHECK ADD  CONSTRAINT [FK_GatePasses_Customers] FOREIGN KEY([Customer])
REFERENCES [dbo].[Customers] ([Id])
GO
ALTER TABLE [dbo].[GatePasses] CHECK CONSTRAINT [FK_GatePasses_Customers]
GO
ALTER TABLE [dbo].[GatePasses]  WITH CHECK ADD  CONSTRAINT [FK_GatePasses_JobCards] FOREIGN KEY([JobCard])
REFERENCES [dbo].[JobCards] ([Id])
GO
ALTER TABLE [dbo].[GatePasses] CHECK CONSTRAINT [FK_GatePasses_JobCards]
GO
ALTER TABLE [dbo].[GatePasses]  WITH CHECK ADD  CONSTRAINT [FK_GatePasses_Vehicles] FOREIGN KEY([Vehicle])
REFERENCES [dbo].[Vehicles] ([Id])
GO
ALTER TABLE [dbo].[GatePasses] CHECK CONSTRAINT [FK_GatePasses_Vehicles]
GO
ALTER TABLE [dbo].[GoodsIssue]  WITH CHECK ADD  CONSTRAINT [FK_GoodsIssue_Customers] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[Customers] ([Id])
GO
ALTER TABLE [dbo].[GoodsIssue] CHECK CONSTRAINT [FK_GoodsIssue_Customers]
GO
ALTER TABLE [dbo].[GoodsIssue]  WITH CHECK ADD  CONSTRAINT [FK_GoodsIssue_Employees] FOREIGN KEY([EmployeenId])
REFERENCES [dbo].[Employees] ([Id])
GO
ALTER TABLE [dbo].[GoodsIssue] CHECK CONSTRAINT [FK_GoodsIssue_Employees]
GO
ALTER TABLE [dbo].[GoodsIssue]  WITH CHECK ADD  CONSTRAINT [FK_GoodsIssue_Sales] FOREIGN KEY([SaleId])
REFERENCES [dbo].[Sales] ([Id])
GO
ALTER TABLE [dbo].[GoodsIssue] CHECK CONSTRAINT [FK_GoodsIssue_Sales]
GO
ALTER TABLE [dbo].[GoodsIssueDetails]  WITH CHECK ADD  CONSTRAINT [FK_GoodsIssueDetails_GoodsIssue] FOREIGN KEY([GoodsIssueId])
REFERENCES [dbo].[GoodsIssue] ([Id])
GO
ALTER TABLE [dbo].[GoodsIssueDetails] CHECK CONSTRAINT [FK_GoodsIssueDetails_GoodsIssue]
GO
ALTER TABLE [dbo].[GoodsIssueDetails]  WITH CHECK ADD  CONSTRAINT [FK_GoodsIssueDetails_Products] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
GO
ALTER TABLE [dbo].[GoodsIssueDetails] CHECK CONSTRAINT [FK_GoodsIssueDetails_Products]
GO
ALTER TABLE [dbo].[GoodsIssueDetails]  WITH CHECK ADD  CONSTRAINT [FK_GoodsIssueDetails_Warehouses] FOREIGN KEY([WarehouseId])
REFERENCES [dbo].[Warehouses] ([Id])
GO
ALTER TABLE [dbo].[GoodsIssueDetails] CHECK CONSTRAINT [FK_GoodsIssueDetails_Warehouses]
GO
ALTER TABLE [dbo].[GoodsReceipt]  WITH CHECK ADD  CONSTRAINT [FK_GoodsReceipt_Employees] FOREIGN KEY([EmployeenId])
REFERENCES [dbo].[Employees] ([Id])
GO
ALTER TABLE [dbo].[GoodsReceipt] CHECK CONSTRAINT [FK_GoodsReceipt_Employees]
GO
ALTER TABLE [dbo].[GoodsReceipt]  WITH CHECK ADD  CONSTRAINT [FK_GoodsReceipt_Purchases] FOREIGN KEY([PurchaseId])
REFERENCES [dbo].[Purchases] ([Id])
GO
ALTER TABLE [dbo].[GoodsReceipt] CHECK CONSTRAINT [FK_GoodsReceipt_Purchases]
GO
ALTER TABLE [dbo].[GoodsReceipt]  WITH CHECK ADD  CONSTRAINT [FK_GoodsReceipt_Suppliers] FOREIGN KEY([SupplierId])
REFERENCES [dbo].[Suppliers] ([Id])
GO
ALTER TABLE [dbo].[GoodsReceipt] CHECK CONSTRAINT [FK_GoodsReceipt_Suppliers]
GO
ALTER TABLE [dbo].[GoodsReceiptDetails]  WITH CHECK ADD  CONSTRAINT [FK_GoodsReceiptDetails_GoodsReceipt] FOREIGN KEY([GoodsReceiptId])
REFERENCES [dbo].[GoodsReceipt] ([Id])
GO
ALTER TABLE [dbo].[GoodsReceiptDetails] CHECK CONSTRAINT [FK_GoodsReceiptDetails_GoodsReceipt]
GO
ALTER TABLE [dbo].[GoodsReceiptDetails]  WITH CHECK ADD  CONSTRAINT [FK_GoodsReceiptDetails_Products] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
GO
ALTER TABLE [dbo].[GoodsReceiptDetails] CHECK CONSTRAINT [FK_GoodsReceiptDetails_Products]
GO
ALTER TABLE [dbo].[GoodsReceiptDetails]  WITH CHECK ADD  CONSTRAINT [FK_GoodsReceiptDetails_Warehouses] FOREIGN KEY([WarehouseId])
REFERENCES [dbo].[Warehouses] ([Id])
GO
ALTER TABLE [dbo].[GoodsReceiptDetails] CHECK CONSTRAINT [FK_GoodsReceiptDetails_Warehouses]
GO
ALTER TABLE [dbo].[InspectionChecklist]  WITH CHECK ADD  CONSTRAINT [FK_InspectionChecklist_JobCategories] FOREIGN KEY([JobCategory])
REFERENCES [dbo].[JobCategories] ([Id])
GO
ALTER TABLE [dbo].[InspectionChecklist] CHECK CONSTRAINT [FK_InspectionChecklist_JobCategories]
GO
ALTER TABLE [dbo].[InspectionChecklist]  WITH CHECK ADD  CONSTRAINT [FK_InspectionChecklist_JobTypes] FOREIGN KEY([JobType])
REFERENCES [dbo].[JobTypes] ([Id])
GO
ALTER TABLE [dbo].[InspectionChecklist] CHECK CONSTRAINT [FK_InspectionChecklist_JobTypes]
GO
ALTER TABLE [dbo].[InspectionJobTypes]  WITH CHECK ADD  CONSTRAINT [FK_InspectionJobTypes_InspectionChecklist] FOREIGN KEY([InspectionId])
REFERENCES [dbo].[InspectionChecklist] ([Id])
GO
ALTER TABLE [dbo].[InspectionJobTypes] CHECK CONSTRAINT [FK_InspectionJobTypes_InspectionChecklist]
GO
ALTER TABLE [dbo].[InspectionJobTypes]  WITH CHECK ADD  CONSTRAINT [FK_InspectionJobTypes_JobTypes] FOREIGN KEY([JobType])
REFERENCES [dbo].[JobTypes] ([Id])
GO
ALTER TABLE [dbo].[InspectionJobTypes] CHECK CONSTRAINT [FK_InspectionJobTypes_JobTypes]
GO
ALTER TABLE [dbo].[InvoiceItems]  WITH CHECK ADD  CONSTRAINT [FK_InvoiceItems_Invoices] FOREIGN KEY([InvoiceId])
REFERENCES [dbo].[Invoices] ([Id])
GO
ALTER TABLE [dbo].[InvoiceItems] CHECK CONSTRAINT [FK_InvoiceItems_Invoices]
GO
ALTER TABLE [dbo].[InvoiceItems]  WITH CHECK ADD  CONSTRAINT [FK_InvoiceItems_Products] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
GO
ALTER TABLE [dbo].[InvoiceItems] CHECK CONSTRAINT [FK_InvoiceItems_Products]
GO
ALTER TABLE [dbo].[InvoiceItems]  WITH CHECK ADD  CONSTRAINT [FK_InvoiceItems_Units] FOREIGN KEY([UnitId])
REFERENCES [dbo].[Units] ([Id])
GO
ALTER TABLE [dbo].[InvoiceItems] CHECK CONSTRAINT [FK_InvoiceItems_Units]
GO
ALTER TABLE [dbo].[InvoiceJobItems]  WITH CHECK ADD  CONSTRAINT [FK_InvoiceJobItems_Invoices] FOREIGN KEY([InvoiceId])
REFERENCES [dbo].[Invoices] ([Id])
GO
ALTER TABLE [dbo].[InvoiceJobItems] CHECK CONSTRAINT [FK_InvoiceJobItems_Invoices]
GO
ALTER TABLE [dbo].[InvoiceJobItems]  WITH CHECK ADD  CONSTRAINT [FK_InvoiceJobItems_JobTypes] FOREIGN KEY([JobType])
REFERENCES [dbo].[JobTypes] ([Id])
GO
ALTER TABLE [dbo].[InvoiceJobItems] CHECK CONSTRAINT [FK_InvoiceJobItems_JobTypes]
GO
ALTER TABLE [dbo].[Invoices]  WITH CHECK ADD  CONSTRAINT [FK_Invoices_Customers] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[Customers] ([Id])
GO
ALTER TABLE [dbo].[Invoices] CHECK CONSTRAINT [FK_Invoices_Customers]
GO
ALTER TABLE [dbo].[Invoices]  WITH CHECK ADD  CONSTRAINT [FK_Invoices_JobCards] FOREIGN KEY([Jobcard])
REFERENCES [dbo].[JobCards] ([Id])
GO
ALTER TABLE [dbo].[Invoices] CHECK CONSTRAINT [FK_Invoices_JobCards]
GO
ALTER TABLE [dbo].[Invoices]  WITH CHECK ADD  CONSTRAINT [FK_Invoices_Vehicles] FOREIGN KEY([Vehicle])
REFERENCES [dbo].[Vehicles] ([Id])
GO
ALTER TABLE [dbo].[Invoices] CHECK CONSTRAINT [FK_Invoices_Vehicles]
GO
ALTER TABLE [dbo].[JobCardDetails]  WITH CHECK ADD  CONSTRAINT [FK_JobDetails_JobOrders] FOREIGN KEY([JobOrder])
REFERENCES [dbo].[JobCards] ([Id])
GO
ALTER TABLE [dbo].[JobCardDetails] CHECK CONSTRAINT [FK_JobDetails_JobOrders]
GO
ALTER TABLE [dbo].[JobCardDetails]  WITH CHECK ADD  CONSTRAINT [FK_JobDetails_JobTypes] FOREIGN KEY([JobType])
REFERENCES [dbo].[JobTypes] ([Id])
GO
ALTER TABLE [dbo].[JobCardDetails] CHECK CONSTRAINT [FK_JobDetails_JobTypes]
GO
ALTER TABLE [dbo].[JobCards]  WITH CHECK ADD  CONSTRAINT [FK_JobOrders_Customers] FOREIGN KEY([Customer])
REFERENCES [dbo].[Customers] ([Id])
GO
ALTER TABLE [dbo].[JobCards] CHECK CONSTRAINT [FK_JobOrders_Customers]
GO
ALTER TABLE [dbo].[JobCards]  WITH CHECK ADD  CONSTRAINT [FK_JobOrders_Vehicles] FOREIGN KEY([Vehicle])
REFERENCES [dbo].[Vehicles] ([Id])
GO
ALTER TABLE [dbo].[JobCards] CHECK CONSTRAINT [FK_JobOrders_Vehicles]
GO
ALTER TABLE [dbo].[JobTypes]  WITH CHECK ADD  CONSTRAINT [FK_JobTypes_JobCategories] FOREIGN KEY([JobCategory])
REFERENCES [dbo].[JobCategories] ([Id])
GO
ALTER TABLE [dbo].[JobTypes] CHECK CONSTRAINT [FK_JobTypes_JobCategories]
GO
ALTER TABLE [dbo].[Locations]  WITH CHECK ADD  CONSTRAINT [FK_Locations_Cities] FOREIGN KEY([CityId])
REFERENCES [dbo].[Cities] ([Id])
GO
ALTER TABLE [dbo].[Locations] CHECK CONSTRAINT [FK_Locations_Cities]
GO
ALTER TABLE [dbo].[Locations]  WITH CHECK ADD  CONSTRAINT [FK_Locations_Countries] FOREIGN KEY([CountryId])
REFERENCES [dbo].[Countries] ([Id])
GO
ALTER TABLE [dbo].[Locations] CHECK CONSTRAINT [FK_Locations_Countries]
GO
ALTER TABLE [dbo].[Locations]  WITH CHECK ADD  CONSTRAINT [FK_Locations_States] FOREIGN KEY([StateId])
REFERENCES [dbo].[States] ([Id])
GO
ALTER TABLE [dbo].[Locations] CHECK CONSTRAINT [FK_Locations_States]
GO
ALTER TABLE [dbo].[MeetingAttendees]  WITH CHECK ADD  CONSTRAINT [FK_MeetingAttendees_AttendanceStatuses] FOREIGN KEY([AttendanceStatus])
REFERENCES [dbo].[AttendanceStatuses] ([Id])
GO
ALTER TABLE [dbo].[MeetingAttendees] CHECK CONSTRAINT [FK_MeetingAttendees_AttendanceStatuses]
GO
ALTER TABLE [dbo].[MeetingAttendees]  WITH CHECK ADD  CONSTRAINT [FK_MeetingAttendees_AttendeeTypes] FOREIGN KEY([AttendeeType])
REFERENCES [dbo].[AttendeeTypes] ([Id])
GO
ALTER TABLE [dbo].[MeetingAttendees] CHECK CONSTRAINT [FK_MeetingAttendees_AttendeeTypes]
GO
ALTER TABLE [dbo].[MeetingAttendees]  WITH CHECK ADD  CONSTRAINT [FK_MeetingAttendees_Employees] FOREIGN KEY([Attendee])
REFERENCES [dbo].[Employees] ([Id])
GO
ALTER TABLE [dbo].[MeetingAttendees] CHECK CONSTRAINT [FK_MeetingAttendees_Employees]
GO
ALTER TABLE [dbo].[MeetingAttendees]  WITH CHECK ADD  CONSTRAINT [FK_MeetingAttendees_Meetings] FOREIGN KEY([Meeting])
REFERENCES [dbo].[Meetings] ([Id])
GO
ALTER TABLE [dbo].[MeetingAttendees] CHECK CONSTRAINT [FK_MeetingAttendees_Meetings]
GO
ALTER TABLE [dbo].[Meetings]  WITH CHECK ADD  CONSTRAINT [FK_Meetings_Departments] FOREIGN KEY([Department])
REFERENCES [dbo].[Departments] ([Id])
GO
ALTER TABLE [dbo].[Meetings] CHECK CONSTRAINT [FK_Meetings_Departments]
GO
ALTER TABLE [dbo].[Meetings]  WITH CHECK ADD  CONSTRAINT [FK_Meetings_Employees] FOREIGN KEY([Reporter])
REFERENCES [dbo].[Employees] ([Id])
GO
ALTER TABLE [dbo].[Meetings] CHECK CONSTRAINT [FK_Meetings_Employees]
GO
ALTER TABLE [dbo].[Meetings]  WITH CHECK ADD  CONSTRAINT [FK_Meetings_Employees1] FOREIGN KEY([OrganizedBy])
REFERENCES [dbo].[Employees] ([Id])
GO
ALTER TABLE [dbo].[Meetings] CHECK CONSTRAINT [FK_Meetings_Employees1]
GO
ALTER TABLE [dbo].[Meetings]  WITH CHECK ADD  CONSTRAINT [FK_Meetings_Locations] FOREIGN KEY([Location])
REFERENCES [dbo].[Locations] ([Id])
GO
ALTER TABLE [dbo].[Meetings] CHECK CONSTRAINT [FK_Meetings_Locations]
GO
ALTER TABLE [dbo].[Meetings]  WITH CHECK ADD  CONSTRAINT [FK_Meetings_MeetingTypes] FOREIGN KEY([MeetingType])
REFERENCES [dbo].[MeetingTypes] ([Id])
GO
ALTER TABLE [dbo].[Meetings] CHECK CONSTRAINT [FK_Meetings_MeetingTypes]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Categories] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Categories] ([Id])
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Categories]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Units] FOREIGN KEY([UnitId])
REFERENCES [dbo].[Units] ([Id])
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Units]
GO
ALTER TABLE [dbo].[PurchaseDetails]  WITH CHECK ADD  CONSTRAINT [FK_PurchaseDetails_Products] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
GO
ALTER TABLE [dbo].[PurchaseDetails] CHECK CONSTRAINT [FK_PurchaseDetails_Products]
GO
ALTER TABLE [dbo].[PurchaseDetails]  WITH CHECK ADD  CONSTRAINT [FK_PurchaseDetails_Purchases] FOREIGN KEY([PurchaseId])
REFERENCES [dbo].[Purchases] ([Id])
GO
ALTER TABLE [dbo].[PurchaseDetails] CHECK CONSTRAINT [FK_PurchaseDetails_Purchases]
GO
ALTER TABLE [dbo].[Purchases]  WITH CHECK ADD  CONSTRAINT [FK_Purchases_Suppliers] FOREIGN KEY([SupplierId])
REFERENCES [dbo].[Suppliers] ([Id])
GO
ALTER TABLE [dbo].[Purchases] CHECK CONSTRAINT [FK_Purchases_Suppliers]
GO
ALTER TABLE [dbo].[QuotationDetails]  WITH CHECK ADD  CONSTRAINT [FK_QuotationDetails_Products] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
GO
ALTER TABLE [dbo].[QuotationDetails] CHECK CONSTRAINT [FK_QuotationDetails_Products]
GO
ALTER TABLE [dbo].[QuotationDetails]  WITH CHECK ADD  CONSTRAINT [FK_QuotationDetails_Quotations] FOREIGN KEY([QuotationId])
REFERENCES [dbo].[Quotations] ([Id])
GO
ALTER TABLE [dbo].[QuotationDetails] CHECK CONSTRAINT [FK_QuotationDetails_Quotations]
GO
ALTER TABLE [dbo].[QuotationDetails]  WITH CHECK ADD  CONSTRAINT [FK_QuotationDetails_Units] FOREIGN KEY([UnitId])
REFERENCES [dbo].[Units] ([Id])
GO
ALTER TABLE [dbo].[QuotationDetails] CHECK CONSTRAINT [FK_QuotationDetails_Units]
GO
ALTER TABLE [dbo].[QuotationJobItems]  WITH CHECK ADD  CONSTRAINT [FK_QuotationJobItems_JobTypes] FOREIGN KEY([JobType])
REFERENCES [dbo].[JobTypes] ([Id])
GO
ALTER TABLE [dbo].[QuotationJobItems] CHECK CONSTRAINT [FK_QuotationJobItems_JobTypes]
GO
ALTER TABLE [dbo].[QuotationJobItems]  WITH CHECK ADD  CONSTRAINT [FK_QuotationJobItems_Quotations] FOREIGN KEY([QuotationId])
REFERENCES [dbo].[Quotations] ([Id])
GO
ALTER TABLE [dbo].[QuotationJobItems] CHECK CONSTRAINT [FK_QuotationJobItems_Quotations]
GO
ALTER TABLE [dbo].[Quotations]  WITH CHECK ADD  CONSTRAINT [FK_Quotations_Customers] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[Customers] ([Id])
GO
ALTER TABLE [dbo].[Quotations] CHECK CONSTRAINT [FK_Quotations_Customers]
GO
ALTER TABLE [dbo].[RolePermissions]  WITH CHECK ADD  CONSTRAINT [FK_RolePermissions_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[Roles] ([RoleId])
GO
ALTER TABLE [dbo].[RolePermissions] CHECK CONSTRAINT [FK_RolePermissions_RoleId]
GO
ALTER TABLE [dbo].[SaleDetails]  WITH CHECK ADD  CONSTRAINT [FK_SaleDetails_Products] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
GO
ALTER TABLE [dbo].[SaleDetails] CHECK CONSTRAINT [FK_SaleDetails_Products]
GO
ALTER TABLE [dbo].[SaleDetails]  WITH CHECK ADD  CONSTRAINT [FK_SaleDetails_Sales] FOREIGN KEY([SaleId])
REFERENCES [dbo].[Sales] ([Id])
GO
ALTER TABLE [dbo].[SaleDetails] CHECK CONSTRAINT [FK_SaleDetails_Sales]
GO
ALTER TABLE [dbo].[Sales]  WITH CHECK ADD  CONSTRAINT [FK_Sales_Customers] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[Customers] ([Id])
GO
ALTER TABLE [dbo].[Sales] CHECK CONSTRAINT [FK_Sales_Customers]
GO
ALTER TABLE [dbo].[States]  WITH CHECK ADD  CONSTRAINT [FK_States_Countries] FOREIGN KEY([CountryId])
REFERENCES [dbo].[Countries] ([Id])
GO
ALTER TABLE [dbo].[States] CHECK CONSTRAINT [FK_States_Countries]
GO
ALTER TABLE [dbo].[Suppliers]  WITH CHECK ADD  CONSTRAINT [FK_Suppliers_Cities] FOREIGN KEY([CityId])
REFERENCES [dbo].[Cities] ([Id])
GO
ALTER TABLE [dbo].[Suppliers] CHECK CONSTRAINT [FK_Suppliers_Cities]
GO
ALTER TABLE [dbo].[Suppliers]  WITH CHECK ADD  CONSTRAINT [FK_Suppliers_Countries] FOREIGN KEY([CountryId])
REFERENCES [dbo].[Countries] ([Id])
GO
ALTER TABLE [dbo].[Suppliers] CHECK CONSTRAINT [FK_Suppliers_Countries]
GO
ALTER TABLE [dbo].[Suppliers]  WITH CHECK ADD  CONSTRAINT [FK_Suppliers_Regions] FOREIGN KEY([RegionId])
REFERENCES [dbo].[Regions] ([Id])
GO
ALTER TABLE [dbo].[Suppliers] CHECK CONSTRAINT [FK_Suppliers_Regions]
GO
ALTER TABLE [dbo].[Suppliers]  WITH CHECK ADD  CONSTRAINT [FK_Suppliers_States] FOREIGN KEY([StateId])
REFERENCES [dbo].[States] ([Id])
GO
ALTER TABLE [dbo].[Suppliers] CHECK CONSTRAINT [FK_Suppliers_States]
GO
ALTER TABLE [dbo].[Territories]  WITH CHECK ADD  CONSTRAINT [FK_Territories_Regions] FOREIGN KEY([RegionId])
REFERENCES [dbo].[Regions] ([Id])
GO
ALTER TABLE [dbo].[Territories] CHECK CONSTRAINT [FK_Territories_Regions]
GO
ALTER TABLE [dbo].[Transactions]  WITH CHECK ADD  CONSTRAINT [FK_Transactions_Accounts] FOREIGN KEY([COAId])
REFERENCES [dbo].[Accounts] ([Id])
GO
ALTER TABLE [dbo].[Transactions] CHECK CONSTRAINT [FK_Transactions_Accounts]
GO
ALTER TABLE [dbo].[UserPermissions]  WITH CHECK ADD  CONSTRAINT [FK_UserPermissions_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[UserPermissions] CHECK CONSTRAINT [FK_UserPermissions_UserId]
GO
ALTER TABLE [dbo].[UserRoles]  WITH CHECK ADD  CONSTRAINT [FK_UserRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[Roles] ([RoleId])
GO
ALTER TABLE [dbo].[UserRoles] CHECK CONSTRAINT [FK_UserRoles_RoleId]
GO
ALTER TABLE [dbo].[UserRoles]  WITH CHECK ADD  CONSTRAINT [FK_UserRoles_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[UserRoles] CHECK CONSTRAINT [FK_UserRoles_UserId]
GO
ALTER TABLE [dbo].[VehicleBookings]  WITH CHECK ADD  CONSTRAINT [FK_VehicleBookings_Customers] FOREIGN KEY([Customer])
REFERENCES [dbo].[Customers] ([Id])
GO
ALTER TABLE [dbo].[VehicleBookings] CHECK CONSTRAINT [FK_VehicleBookings_Customers]
GO
ALTER TABLE [dbo].[VehicleBookings]  WITH CHECK ADD  CONSTRAINT [FK_VehicleBookings_Vehicles] FOREIGN KEY([Vehicle])
REFERENCES [dbo].[Vehicles] ([Id])
GO
ALTER TABLE [dbo].[VehicleBookings] CHECK CONSTRAINT [FK_VehicleBookings_Vehicles]
GO
ALTER TABLE [dbo].[VehicleCourtesyBooking]  WITH CHECK ADD  CONSTRAINT [FK_VehicleCourtesyBooking_Customers] FOREIGN KEY([Customer])
REFERENCES [dbo].[Customers] ([Id])
GO
ALTER TABLE [dbo].[VehicleCourtesyBooking] CHECK CONSTRAINT [FK_VehicleCourtesyBooking_Customers]
GO
ALTER TABLE [dbo].[VehicleCourtesyBooking]  WITH CHECK ADD  CONSTRAINT [FK_VehicleCourtesyBooking_Vehicles] FOREIGN KEY([Vehicle])
REFERENCES [dbo].[Vehicles] ([Id])
GO
ALTER TABLE [dbo].[VehicleCourtesyBooking] CHECK CONSTRAINT [FK_VehicleCourtesyBooking_Vehicles]
GO
ALTER TABLE [dbo].[Vehicles]  WITH CHECK ADD  CONSTRAINT [FK_Vehicles_AssemblyTypes] FOREIGN KEY([AssemblyType])
REFERENCES [dbo].[AssemblyTypes] ([Id])
GO
ALTER TABLE [dbo].[Vehicles] CHECK CONSTRAINT [FK_Vehicles_AssemblyTypes]
GO
ALTER TABLE [dbo].[Vehicles]  WITH CHECK ADD  CONSTRAINT [FK_Vehicles_Brands] FOREIGN KEY([Brand])
REFERENCES [dbo].[Brands] ([Id])
GO
ALTER TABLE [dbo].[Vehicles] CHECK CONSTRAINT [FK_Vehicles_Brands]
GO
ALTER TABLE [dbo].[Vehicles]  WITH CHECK ADD  CONSTRAINT [FK_Vehicles_ColorTypes] FOREIGN KEY([Color])
REFERENCES [dbo].[ColorTypes] ([Id])
GO
ALTER TABLE [dbo].[Vehicles] CHECK CONSTRAINT [FK_Vehicles_ColorTypes]
GO
ALTER TABLE [dbo].[Vehicles]  WITH CHECK ADD  CONSTRAINT [FK_Vehicles_ColorTypes1] FOREIGN KEY([SecondColor])
REFERENCES [dbo].[ColorTypes] ([Id])
GO
ALTER TABLE [dbo].[Vehicles] CHECK CONSTRAINT [FK_Vehicles_ColorTypes1]
GO
ALTER TABLE [dbo].[Vehicles]  WITH CHECK ADD  CONSTRAINT [FK_Vehicles_Countries] FOREIGN KEY([CountryOfOrigin])
REFERENCES [dbo].[Countries] ([Id])
GO
ALTER TABLE [dbo].[Vehicles] CHECK CONSTRAINT [FK_Vehicles_Countries]
GO
ALTER TABLE [dbo].[Vehicles]  WITH CHECK ADD  CONSTRAINT [FK_Vehicles_Customers] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[Customers] ([Id])
GO
ALTER TABLE [dbo].[Vehicles] CHECK CONSTRAINT [FK_Vehicles_Customers]
GO
ALTER TABLE [dbo].[Vehicles]  WITH CHECK ADD  CONSTRAINT [FK_Vehicles_FuelTypes] FOREIGN KEY([FuelType])
REFERENCES [dbo].[FuelTypes] ([Id])
GO
ALTER TABLE [dbo].[Vehicles] CHECK CONSTRAINT [FK_Vehicles_FuelTypes]
GO
ALTER TABLE [dbo].[Vehicles]  WITH CHECK ADD  CONSTRAINT [FK_Vehicles_VehicleMakes] FOREIGN KEY([Make])
REFERENCES [dbo].[VehicleMakes] ([Id])
GO
ALTER TABLE [dbo].[Vehicles] CHECK CONSTRAINT [FK_Vehicles_VehicleMakes]
GO
ALTER TABLE [dbo].[Vehicles]  WITH CHECK ADD  CONSTRAINT [FK_Vehicles_VehicleModels] FOREIGN KEY([Model])
REFERENCES [dbo].[VehicleModels] ([Id])
GO
ALTER TABLE [dbo].[Vehicles] CHECK CONSTRAINT [FK_Vehicles_VehicleModels]
GO
ALTER TABLE [dbo].[Vehicles]  WITH CHECK ADD  CONSTRAINT [FK_Vehicles_VehicleTypes] FOREIGN KEY([VehicleType])
REFERENCES [dbo].[VehicleTypes] ([Id])
GO
ALTER TABLE [dbo].[Vehicles] CHECK CONSTRAINT [FK_Vehicles_VehicleTypes]
GO
ALTER TABLE [dbo].[Warehouses]  WITH CHECK ADD  CONSTRAINT [FK_Warehouses_Cities] FOREIGN KEY([CityId])
REFERENCES [dbo].[Cities] ([Id])
GO
ALTER TABLE [dbo].[Warehouses] CHECK CONSTRAINT [FK_Warehouses_Cities]
GO
ALTER TABLE [dbo].[Warehouses]  WITH CHECK ADD  CONSTRAINT [FK_Warehouses_Countries] FOREIGN KEY([CountryId])
REFERENCES [dbo].[Countries] ([Id])
GO
ALTER TABLE [dbo].[Warehouses] CHECK CONSTRAINT [FK_Warehouses_Countries]
GO
ALTER TABLE [dbo].[Warehouses]  WITH CHECK ADD  CONSTRAINT [FK_Warehouses_States] FOREIGN KEY([StateId])
REFERENCES [dbo].[States] ([Id])
GO
ALTER TABLE [dbo].[Warehouses] CHECK CONSTRAINT [FK_Warehouses_States]
GO
/****** Object:  Trigger [dbo].[OnBankAddCOA]    Script Date: 3/31/2021 4:53:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TRIGGER [dbo].[OnBankAddCOA]
ON [dbo].[Banks]
AFTER INSERT   
AS
BEGIN
INSERT INTO [dbo].[Accounts]
           ([HeadCode]
           ,[HeadName]
           ,[ParentHead]
           ,[PHeadName]
           ,[HeadLevel]
           ,[HeadType]
           ,[IsTransaction]
           ,[IsGL]
           ,[IsBudget]
           ,[IsDepreciation]
           ,[CustomerId]
           ,[SupplierId]
           ,[DepreciationRate]
           ,[InsertDate]
           ,[InsertUserId]
           ,[IsActive]
		   ,BankId)
     
           
		   SELECT 
		   ISNULL((SELECT MAX([HeadCode])+1 FROM [dbo].[Accounts] where [PHeadName] ='Cash At Bank'),
		   (SELECT TOP 1 ([HeadCode] * 100)+1 FROM [dbo].[Accounts] where [HeadName] ='Cash At Bank')
		   ) as HeadCode,
		    i.BankName as HeadName,
		   (SELECT TOP 1 [Id] FROM [dbo].[Accounts] where [HeadName] ='Cash At Bank') as [ParentHead],
		   'Cash At Bank' as [PHeadName]
		   ,'4' as [HeadLevel]
           ,'A' AS [HeadType]
           ,'1'AS [IsTransaction]
           ,'0' AS [IsGL]
           ,'0' AS[IsBudget]
           ,'0' AS [IsDepreciation]
           ,NULL [CustomerId]
           ,NULL [SupplierId]
           ,'0' AS[DepreciationRate]
           ,getDAte() AS[InsertDate]
           ,'1' AS [InsertUserId]           
           ,'1' AS[IsActive]
		   ,i.Id
		   FROM inserted i
		   
END;

GO
ALTER TABLE [dbo].[Banks] ENABLE TRIGGER [OnBankAddCOA]
GO
/****** Object:  Trigger [dbo].[OnCustomerAddCOA]    Script Date: 3/31/2021 4:53:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TRIGGER [dbo].[OnCustomerAddCOA]
ON [dbo].[Customers]
AFTER INSERT   
AS
BEGIN
INSERT INTO [dbo].[Accounts]
           ([HeadCode]
           ,[HeadName]
           ,[ParentHead]
           ,[PHeadName]
           ,[HeadLevel]
           ,[HeadType]
           ,[IsTransaction]
           ,[IsGL]
           ,[IsBudget]
           ,[IsDepreciation]
           ,[CustomerId]
           ,[SupplierId]
           ,[DepreciationRate]
           ,[InsertDate]
           ,[InsertUserId]
           ,[IsActive])
     
           
		   SELECT 
		   ISNULL((SELECT MAX([HeadCode])+1 FROM [dbo].[Accounts] where [PHeadName] ='Account Receivable' AND [HeadCode]>10000000),
		    (SELECT TOP 1 ([HeadCode] * 10000000)+1 FROM [dbo].[Accounts] where [HeadName] ='Account Receivable')
		   ) as HeadCode,
		   --(SELECT MAX([HeadCode])+1 FROM [dbo].[Accounts] where [PHeadName] ='Account Receivable') as HeadCode,
		    Convert(nvarchar(100),i.Id)+' - '+ i.[Name] as HeadName,
		   (SELECT TOP 1 [Id] FROM [dbo].[Accounts] where [HeadName] ='Account Receivable') as [ParentHead],
		   'Account Receivable' as [PHeadName]
		   ,'4' as [HeadLevel]
           ,'A' AS [HeadType]
           ,'1'AS [IsTransaction]
           ,'0' AS [IsGL]
           ,'0' AS[IsBudget]
           ,'0' AS [IsDepreciation]
           ,i.Id [CustomerId]
           ,NULL [SupplierId]
           ,'0' AS[DepreciationRate]
           ,getDAte() AS[InsertDate]
           ,'1' AS [InsertUserId]           
           ,'1' AS[IsActive]
		   FROM inserted i
		   
END;

GO
ALTER TABLE [dbo].[Customers] ENABLE TRIGGER [OnCustomerAddCOA]
GO
/****** Object:  Trigger [dbo].[OnEmployeeAddCOA]    Script Date: 3/31/2021 4:53:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TRIGGER [dbo].[OnEmployeeAddCOA]
ON [dbo].[Employees]
AFTER INSERT   
AS
BEGIN
INSERT INTO [dbo].[Accounts]
           ([HeadCode]
           ,[HeadName]
           ,[ParentHead]
           ,[PHeadName]
           ,[HeadLevel]
           ,[HeadType]
           ,[IsTransaction]
           ,[IsGL]
           ,[IsBudget]
           ,[IsDepreciation]
           ,[CustomerId]
           ,[SupplierId]
           ,[DepreciationRate]
           ,[InsertDate]
           ,[InsertUserId]
           ,[IsActive]
		   ,EmployeeId)
     
           
		   SELECT 
		   ISNULL((SELECT MAX([HeadCode])+1 FROM [dbo].[Accounts] where [PHeadName] ='Employee Ledger'),
		   (SELECT TOP 1 ([HeadCode] * 10000)+1 FROM [dbo].[Accounts] where [HeadName] ='Employee Ledger')
		   ) as HeadCode,
		    Convert(nvarchar(100),i.Id)+' - '+ i.[FirstName]+' '+i.[LastName] as HeadName,
		   (SELECT TOP 1 [Id] FROM [dbo].[Accounts] where [HeadName] ='Employee Ledger') as [ParentHead],
		   'Employee Ledger' as [PHeadName]
		   ,'3' as [HeadLevel]
           ,'L' AS [HeadType]
           ,'1'AS [IsTransaction]
           ,'0' AS [IsGL]
           ,'0' AS[IsBudget]
           ,'0' AS [IsDepreciation]
           ,NULL[CustomerId]
           ,NULL [SupplierId]
           ,'0' AS[DepreciationRate]
           ,getDAte() AS[InsertDate]
           ,'1' AS [InsertUserId]           
           ,'1' AS[IsActive]
		   ,i.Id
		   FROM inserted i
		   
END;

GO
ALTER TABLE [dbo].[Employees] ENABLE TRIGGER [OnEmployeeAddCOA]
GO
/****** Object:  Trigger [dbo].[OnExpenseTypesAddCOA]    Script Date: 3/31/2021 4:53:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TRIGGER [dbo].[OnExpenseTypesAddCOA]
ON [dbo].[ExpenseTypes]
AFTER INSERT   
AS
BEGIN
INSERT INTO [dbo].[Accounts]
           ([HeadCode]
           ,[HeadName]
           ,[ParentHead]
           ,[PHeadName]
           ,[HeadLevel]
           ,[HeadType]
           ,[IsTransaction]
           ,[IsGL]
           ,[IsBudget]
           ,[IsDepreciation]
           ,[CustomerId]
           ,[SupplierId]
           ,[DepreciationRate]
           ,[InsertDate]
           ,[InsertUserId]
           ,[IsActive]
		   ,ExpenseTypeId)
     
           
		   SELECT 
		   (SELECT MAX([HeadCode])+1 FROM [dbo].[Accounts] where [PHeadName] ='Expence') as HeadCode,
		   i.[Type] as HeadName,
		   (SELECT top 1 [Id] FROM [dbo].[Accounts] where [HeadName] ='Expence') as [ParentHead],
		   'Expence' as [PHeadName]
		   ,'2' as [HeadLevel]
           ,'E' AS [HeadType]
           ,'1'AS [IsTransaction]
           ,'0' AS [IsGL]
           ,'0' AS[IsBudget]
           ,'0' AS [IsDepreciation]
           ,NULL [CustomerId]
           ,NULL [SupplierId]
           ,'0' AS[DepreciationRate]
           ,getDAte() AS[InsertDate]
           ,'1' AS [InsertUserId]           
           ,'1' AS[IsActive]
		   ,i.Id
		   FROM inserted i
		   
END;

GO
ALTER TABLE [dbo].[ExpenseTypes] ENABLE TRIGGER [OnExpenseTypesAddCOA]
GO
/****** Object:  Trigger [dbo].[OnInvoicesAddTransactions]    Script Date: 3/31/2021 4:53:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TRIGGER [dbo].[OnInvoicesAddTransactions]
ON [dbo].[Invoices]
AFTER INSERT   
AS
BEGIN
DECLARE @CustomerId as bigint
DECLARE @PaymentAccount as bigint
DECLARE @VNo as bigint
DECLARE @DateTime as datetime
DECLARE @Amount as float
DECLARE @PaidAmount as float
DECLARE @InventoryCOAId as bigint
DECLARE @InventoryHeadCode as bigint
DECLARE @ProductSaleCOAId as bigint
DECLARE @ProductSaleHeadCode as bigint
DECLARE @PaymentAccountName as NVARCHAR(100)
select top 1 @CustomerId=i.[CustomerId],@PaymentAccount=i.[PaymentAccount],@VNo=i.[VNo] ,@Amount=[NetTotal] ,@DateTime=i.[Date],@PaidAmount=i.[PaidAmount] 
,@PaymentAccountName=(SELECT top 1 [HeadName] FROM [dbo].[Accounts] where [Id] =i.[PaymentAccount])
from inserted i
select top 1 @InventoryCOAId=[Id],@InventoryHeadCode=[HeadCode] from [dbo].[Accounts] where [HeadName]='Inventory'
select top 1 @ProductSaleCOAId=[Id],@ProductSaleHeadCode=[HeadCode] from [dbo].[Accounts] where [HeadName]='Product Sale'
-- Transaction: Inventory Debit
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'INV' [Vtype]
		   ,@DateTime [VDate]
		   , @InventoryCOAId as [COAId]
		   , @InventoryHeadCode as [COA]
		   --,(SELECT top 1 'Inventory credit For '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]
		   ,'Inventory credit For Invoice No. '+CONVERT(nvarchar(50),i.Id) as [Narration]
		   ,0 as [Debit]
		   ,i.[NetTotal] [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
-- Transaction: Customer debit
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'INV' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [CustomerId] =i.[CustomerId]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [CustomerId] =i.[CustomerId]) as [COA]
		   ,(SELECT top 1 'Customer debit For Invoice No. '+CONVERT(nvarchar(50),i.Id) + ' Customer: '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		 
		   --,'Customer debit For Invoice No. '+CONVERT(nvarchar(50),i.Id)
		   ,i.[NetTotal] as [Debit]
		   ,0 [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
		   
		   
-- Transaction: Purchase Product
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'INV' [Vtype]
		   ,@DateTime [VDate]
		   ,@ProductSaleCOAId as [COAId]
		   ,@ProductSaleHeadCode as [COA]
		   ,(SELECT top 1 'Sale Income For Invoice No. '+CONVERT(nvarchar(50),i.Id) + ' Customer: '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		 
		   --,(SELECT top 1 'Sale Income For '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]
		   ,0 as [Debit]
		   ,i.[NetTotal] [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
-- Transaction: Paid amount
if(@PaidAmount>0)
BEGIN
-- Transaction: Paid amount for Supplier [Credit]
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'INV' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [Id] =i.[PaymentAccount]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [Id] =i.[PaymentAccount]) as [COA]
		   ,(SELECT top 1 @PaymentAccountName+' in Sale for Invoice No. '+CONVERT(nvarchar(50),i.Id) + ' Customer: '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		 
		   --,(SELECT top 1 'Customer credit for Paid Amount For Invoice No. '+CONVERT(nvarchar(50),i.Id) + ' Customer: '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		 
		    --,(SELECT top 1 'Customer credit for Paid Amount For . '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		  		   
		   ,@PaidAmount as [Debit]
		   ,0 [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
	-- Transaction: Supplier [Debit]	   
		INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'INV' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [CustomerId] =i.[CustomerId]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [CustomerId] =i.[CustomerId]) as [COA]
		    --,(SELECT top 1 'Customer. '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]	
			,(SELECT top 1 'Customer credit for Paid Amount For Invoice No. '+CONVERT(nvarchar(50),i.Id) + ' Customer: '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		 
		   ,0 as [Debit]
		   ,@PaidAmount [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
   
END;
END;

GO
ALTER TABLE [dbo].[Invoices] ENABLE TRIGGER [OnInvoicesAddTransactions]
GO
/****** Object:  Trigger [dbo].[OnPurchasesAddTransactions]    Script Date: 3/31/2021 4:53:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TRIGGER [dbo].[OnPurchasesAddTransactions]
ON [dbo].[Purchases]
AFTER INSERT   
AS
BEGIN
DECLARE @SupplierId as bigint
DECLARE @PaymentAccount as bigint
DECLARE @VNo as bigint
DECLARE @DateTime as datetime
DECLARE @Amount as float
DECLARE @PaidAmount as float
DECLARE @InventoryCOAId as bigint
DECLARE @InventoryHeadCode as bigint

DECLARE @ProductPurchaseCOAId as bigint
DECLARE @ProductPurchaseHeadCode as bigint

select top 1 @SupplierId=i.[SupplierId],@PaymentAccount=i.[PaymentAccount],@VNo=i.[VNo] ,@Amount=[NetTotal] ,@DateTime=i.[Date],@PaidAmount=i.[PaidAmount] from inserted i


select top 1 @InventoryCOAId=[Id],@InventoryHeadCode=[HeadCode] from [dbo].[Accounts] where [HeadName]='Inventory'
select top 1 @ProductPurchaseCOAId=[Id],@ProductPurchaseHeadCode=[HeadCode] from [dbo].[Accounts] where [HeadName]='Product Purchase'
-- Transaction: Inventory Debit
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'Purchase' [Vtype]
		   ,@DateTime [VDate]
		   ,@InventoryCOAId as [COAId]
		   , @InventoryHeadCode as [COA]
		   ,(SELECT top 1 'Inventory Debit For Supplier '+[CompanyName] FROM [dbo].[Suppliers] where [Id] =i.[SupplierId]) as [Narration]
		   ,i.[NetTotal] as [Debit]
		   ,0 [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
-- Transaction: Supplier
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'Purchase' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [SupplierId] =i.[SupplierId]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [SupplierId] =i.[SupplierId]) as [COA]
		   ,(SELECT top 1 'Supplier. '+[CompanyName] FROM [dbo].[Suppliers] where [Id] =i.[SupplierId]) as [Narration]		   
		   ,0 as [Debit]
		   ,i.[NetTotal] [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
		   
		   
-- Transaction: Purchase Product
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'Purchase' [Vtype]
		   ,@DateTime [VDate]
		   ,@ProductPurchaseCOAId as [COAId]
		   , @ProductPurchaseHeadCode as [COA]
		   ,(SELECT top 1 'Company Credit For '+[CompanyName] FROM [dbo].[Suppliers] where [Id] =i.[SupplierId]) as [Narration]
		   ,i.[NetTotal] as [Debit]
		   ,0 [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
-- Transaction: Paid amount
if(@PaidAmount>0)
BEGIN
-- Transaction: Paid amount for Supplier [Credit]
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'Purchase' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [Id] =i.[PaymentAccount]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [Id] =i.[PaymentAccount]) as [COA]
		    ,(SELECT top 1 'Paid amount for Supplier. '+[CompanyName] FROM [dbo].[Suppliers] where [Id] =i.[SupplierId]) as [Narration]		  		   
		   ,0 as [Debit]
		   ,@PaidAmount [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
	-- Transaction: Supplier [Debit]	   
		INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'Purchase' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [SupplierId] =i.[SupplierId]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [SupplierId] =i.[SupplierId]) as [COA]
		    ,(SELECT top 1 'Supplier. '+[CompanyName] FROM [dbo].[Suppliers] where [Id] =i.[SupplierId]) as [Narration]		  		   
		   ,@PaidAmount as [Debit]
		   ,0 [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
   
END;
END;
GO
ALTER TABLE [dbo].[Purchases] ENABLE TRIGGER [OnPurchasesAddTransactions]
GO
/****** Object:  Trigger [dbo].[OnSalesAddTransactions]    Script Date: 3/31/2021 4:53:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TRIGGER [dbo].[OnSalesAddTransactions]
ON [dbo].[Sales]
AFTER INSERT   
AS
BEGIN
DECLARE @CustomerId as bigint
DECLARE @PaymentAccount as bigint
DECLARE @VNo as bigint
DECLARE @DateTime as datetime
DECLARE @Amount as float
DECLARE @PaidAmount as float
DECLARE @InventoryCOAId as bigint
DECLARE @InventoryHeadCode as bigint

DECLARE @ProductSaleCOAId as bigint
DECLARE @ProductSaleHeadCode as bigint

DECLARE @PaymentAccountName as NVARCHAR(100)
select top 1 @CustomerId=i.[CustomerId],@PaymentAccount=i.[PaymentAccount],@VNo=i.[VNo] ,@Amount=[NetTotal] ,@DateTime=i.[Date],@PaidAmount=i.[PaidAmount] 
,@PaymentAccountName=(SELECT top 1 [HeadName] FROM [dbo].[Accounts] where [Id] =i.[PaymentAccount])
from inserted i

select top 1 @InventoryCOAId=[Id],@InventoryHeadCode=[HeadCode] from [dbo].[Accounts] where [HeadName]='Inventory'
select top 1 @ProductSaleCOAId=[Id],@ProductSaleHeadCode=[HeadCode] from [dbo].[Accounts] where [HeadName]='Product Sale'

-- Transaction: Inventory Debit
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'INV' [Vtype]
		   ,@DateTime [VDate]
		   , @InventoryCOAId as [COAId]
		   , @InventoryHeadCode as [COA]
		   --,(SELECT top 1 'Inventory credit For '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]
		   ,'Inventory credit For Invoice No. '+CONVERT(nvarchar(50),i.Id) as [Narration]
		   ,0 as [Debit]
		   ,i.[NetTotal] [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
-- Transaction: Customer debit
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'INV' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [CustomerId] =i.[CustomerId]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [CustomerId] =i.[CustomerId]) as [COA]
		   ,(SELECT top 1 'Customer debit For Invoice No. '+CONVERT(nvarchar(50),i.Id) + ' Customer: '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		 
		   --,'Customer debit For Invoice No. '+CONVERT(nvarchar(50),i.Id)
		   ,i.[NetTotal] as [Debit]
		   ,0 [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
		   
		   
-- Transaction: Purchase Product
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'INV' [Vtype]
		   ,@DateTime [VDate]
		   ,@ProductSaleCOAId as [COAId]
		   ,@ProductSaleHeadCode as [COA]
		   ,(SELECT top 1 'Sale Income For Invoice No. '+CONVERT(nvarchar(50),i.Id) + ' Customer: '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		 

		   --,(SELECT top 1 'Sale Income For '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]
		   ,0 as [Debit]
		   ,i.[NetTotal] [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
-- Transaction: Paid amount
if(@PaidAmount>0)
BEGIN
-- Transaction: Paid amount for Supplier [Credit]
INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'INV' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [Id] =i.[PaymentAccount]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [Id] =i.[PaymentAccount]) as [COA]
		   ,(SELECT top 1 @PaymentAccountName+' in Sale for Invoice No. '+CONVERT(nvarchar(50),i.Id) + ' Customer: '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		 
		   --,(SELECT top 1 'Customer credit for Paid Amount For Invoice No. '+CONVERT(nvarchar(50),i.Id) + ' Customer: '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		 

		    --,(SELECT top 1 'Customer credit for Paid Amount For . '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		  		   
		   ,@PaidAmount as [Debit]
		   ,0 [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
	-- Transaction: Supplier [Debit]	   
		INSERT INTO [dbo].[Transactions]
           (
		   [VNo]
		  ,[Vtype]
		  ,[VDate]
		  ,[COAId]
		  ,[COA]
		  ,[Narration]
		  ,[Debit]
		  ,[Credit]
		  ,[IsPosted]
		  ,[IsAppove]
		  ,[InsertDate]
		  ,[InsertUserId]
		  
		   )
     
           
		   SELECT 
		   i.[VNo] as [VNo]
		   ,'INV' [Vtype]
		   ,@DateTime [VDate]
		   , (SELECT top 1 [Id] FROM [dbo].[Accounts] where [CustomerId] =i.[CustomerId]) as [COAId]
		   , (SELECT top 1 [HeadCode] FROM [dbo].[Accounts] where [CustomerId] =i.[CustomerId]) as [COA]
		    --,(SELECT top 1 'Customer. '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]	
			,(SELECT top 1 'Customer credit for Paid Amount For Invoice No. '+CONVERT(nvarchar(50),i.Id) + ' Customer: '+[Name] FROM [dbo].[Customers] where [Id] =i.[CustomerId]) as [Narration]		 

		   ,0 as [Debit]
		   ,@PaidAmount [Credit]
		   ,1 as [IsPosted]
		   ,1 [IsAppove]
		   ,getDate() as [InsertDate]
		   ,1 as [InsertUserId]
		   
		   FROM inserted i
   
END;
END;
GO
ALTER TABLE [dbo].[Sales] ENABLE TRIGGER [OnSalesAddTransactions]
GO
/****** Object:  Trigger [dbo].[OnSupplierAddCOA]    Script Date: 3/31/2021 4:53:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TRIGGER [dbo].[OnSupplierAddCOA]
ON [dbo].[Suppliers]
AFTER INSERT   
AS
BEGIN
INSERT INTO [dbo].[Accounts]
           ([HeadCode]
           ,[HeadName]
           ,[ParentHead]
           ,[PHeadName]
           ,[HeadLevel]
           ,[HeadType]
           ,[IsTransaction]
           ,[IsGL]
           ,[IsBudget]
           ,[IsDepreciation]
           ,[CustomerId]
           ,[SupplierId]
           ,[DepreciationRate]
           ,[InsertDate]
           ,[InsertUserId]
           ,[IsActive])
     
           
		   SELECT 
		   ISNULL((SELECT MAX([HeadCode])+1 FROM [dbo].[Accounts] where [PHeadName] ='Account Payable'),
		    (SELECT TOP 1 ([HeadCode] * 1000000)+1 FROM [dbo].[Accounts] where [HeadName] ='Employee Ledger')
		   ) as HeadCode,
		    Convert(nvarchar(100),i.Id)+' - '+ i.[CompanyName] as HeadName,
		   (SELECT TOP 1 [Id] FROM [dbo].[Accounts] where [HeadName] ='Account Payable') as [ParentHead],
		   'Account Payable' as [PHeadName]
		   ,'3' as [HeadLevel]
           ,'L' AS [HeadType]
           ,'1'AS [IsTransaction]
           ,'0' AS [IsGL]
           ,'0' AS[IsBudget]
           ,'0' AS [IsDepreciation]
           ,NULL [CustomerId]
           ,i.Id [SupplierId]
           ,'0' AS[DepreciationRate]
           ,getDAte() AS[InsertDate]
           ,'1' AS [InsertUserId]           
           ,'1' AS[IsActive]
		   FROM inserted i
		   
END;

GO
ALTER TABLE [dbo].[Suppliers] ENABLE TRIGGER [OnSupplierAddCOA]
GO
