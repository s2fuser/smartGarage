USE [master]
GO
/****** Object:  Database [SmartGarage_Default_v1]    Script Date: 04-09-2023 18:44:42 ******/
CREATE DATABASE [SmartGarage_Default_v1]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'SmartGarage_Defaultv1', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\SmartGarage_Defaultv1.mdf' , SIZE = 73728KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'SmartGarage_Defaultv1_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\SmartGarage_Defaultv1_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [SmartGarage_Default_v1] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [SmartGarage_Default_v1].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [SmartGarage_Default_v1] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET ARITHABORT OFF 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET  ENABLE_BROKER 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET  MULTI_USER 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [SmartGarage_Default_v1] SET DB_CHAINING OFF 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [SmartGarage_Default_v1] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [SmartGarage_Default_v1] SET QUERY_STORE = ON
GO
ALTER DATABASE [SmartGarage_Default_v1] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [SmartGarage_Default_v1]
GO
/****** Object:  Table [dbo].[Accounts]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AgendaDecisions]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AgendaItems]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AgendaItemTypes]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AssemblyTypes]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Attendance]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AttendanceStatuses]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AttendeeTypes]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Banks]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Brands]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Categories]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cities]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ColorTypes]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Companies]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Countries]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Currencies]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CustomerGroups]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customers]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DailyClosing]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DamagedProducts]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Departments]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Designations]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Employees]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Exceptions]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Expenses]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ExpenseTypes]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FollowUps]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FuelTypes]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GatePasses]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GoodsIssue]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GoodsIssueDetails]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GoodsReceipt]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GoodsReceiptDetails]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[InspectionChecklist]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[InspectionJobTypes]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[InvoiceItems]    Script Date: 04-09-2023 18:44:42 ******/
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
	[Gst] [float] NOT NULL,
	[TotalTax] [float] NOT NULL,
	[CGST] [float] NOT NULL,
	[SGST] [float] NOT NULL,
	[SubTotal] [float] NOT NULL,
	[HSN] [int] NOT NULL,
	[ServiceType] [varchar](100) NULL,
 CONSTRAINT [PK_InvoiceItems] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[InvoiceJobItems]    Script Date: 04-09-2023 18:44:42 ******/
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
	[Gst] [float] NOT NULL,
	[TotalTax] [float] NOT NULL,
	[SubTotal] [float] NOT NULL,
	[ServiceType] [varchar](100) NULL,
 CONSTRAINT [PK_InvoiceJobItems] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Invoices]    Script Date: 04-09-2023 18:44:42 ******/
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
	[Gst] [float] NOT NULL,
	[CGST] [float] NOT NULL,
	[SGST] [float] NOT NULL,
	[InsuranceCoName] [varchar](200) NULL,
	[InsuranceCoAdd] [varchar](500) NULL,
	[InsuranceCoCit] [varchar](500) NULL,
	[GstIN] [varchar](500) NULL,
	[Email] [varchar](200) NULL,
	[ServiceType] [varchar](100) NULL,
 CONSTRAINT [PK_Invoices] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[JobCardDetails]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[JobCards]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[JobCategories]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[JobTypes]    Script Date: 04-09-2023 18:44:42 ******/
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
	[Gst] [float] NOT NULL,
	[ServiceType] [varchar](100) NULL,
 CONSTRAINT [PK_JobTypes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Languages]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Locations]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MeetingAttendees]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Meetings]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MeetingTypes]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 04-09-2023 18:44:42 ******/
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
	[Gst] [float] NULL,
	[HSN] [int] NOT NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PurchaseDetails]    Script Date: 04-09-2023 18:44:42 ******/
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
	[GstPrice] [float] NULL,
 CONSTRAINT [PK_PurchaseDetails] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Purchases]    Script Date: 04-09-2023 18:44:42 ******/
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
	[GstPrice] [float] NULL,
 CONSTRAINT [PK_Purchases] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[QuotationDetails]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[QuotationJobItems]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Quotations]    Script Date: 04-09-2023 18:44:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Regions]    Script Date: 04-09-2023 18:44:43 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ResolutionStatuses]    Script Date: 04-09-2023 18:44:43 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RolePermissions]    Script Date: 04-09-2023 18:44:43 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Roles]    Script Date: 04-09-2023 18:44:43 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SaleDetails]    Script Date: 04-09-2023 18:44:43 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Sales]    Script Date: 04-09-2023 18:44:43 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Shippers]    Script Date: 04-09-2023 18:44:43 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[States]    Script Date: 04-09-2023 18:44:43 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SupplierGroups]    Script Date: 04-09-2023 18:44:43 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Suppliers]    Script Date: 04-09-2023 18:44:43 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Territories]    Script Date: 04-09-2023 18:44:43 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Transactions]    Script Date: 04-09-2023 18:44:43 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Units]    Script Date: 04-09-2023 18:44:43 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserPermissions]    Script Date: 04-09-2023 18:44:43 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserPreferences]    Script Date: 04-09-2023 18:44:43 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserRoles]    Script Date: 04-09-2023 18:44:43 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 04-09-2023 18:44:43 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VehicleBookings]    Script Date: 04-09-2023 18:44:43 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VehicleCourtesyBooking]    Script Date: 04-09-2023 18:44:43 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VehicleMakes]    Script Date: 04-09-2023 18:44:43 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VehicleModels]    Script Date: 04-09-2023 18:44:43 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Vehicles]    Script Date: 04-09-2023 18:44:43 ******/
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
	[Mileage] [int] NOT NULL,
	[ChassisNo] [varchar](100) NULL,
 CONSTRAINT [PK_Vehicles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VehicleTypes]    Script Date: 04-09-2023 18:44:43 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VersionInfo]    Script Date: 04-09-2023 18:44:43 ******/
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
/****** Object:  Table [dbo].[Warehouses]    Script Date: 04-09-2023 18:44:43 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
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
ALTER TABLE [dbo].[InvoiceItems] ADD  DEFAULT ('0') FOR [TotalTax]
GO
ALTER TABLE [dbo].[InvoiceItems] ADD  DEFAULT ('0') FOR [CGST]
GO
ALTER TABLE [dbo].[InvoiceItems] ADD  DEFAULT ('0') FOR [SGST]
GO
ALTER TABLE [dbo].[InvoiceItems] ADD  DEFAULT ('0') FOR [SubTotal]
GO
ALTER TABLE [dbo].[InvoiceItems] ADD  DEFAULT ('0') FOR [HSN]
GO
ALTER TABLE [dbo].[InvoiceJobItems] ADD  CONSTRAINT [DF_InvoiceJobItems_Discount]  DEFAULT ((0)) FOR [Discount]
GO
ALTER TABLE [dbo].[InvoiceJobItems] ADD  DEFAULT ('0') FOR [Gst]
GO
ALTER TABLE [dbo].[InvoiceJobItems] ADD  DEFAULT ('0') FOR [TotalTax]
GO
ALTER TABLE [dbo].[InvoiceJobItems] ADD  DEFAULT ('0') FOR [SubTotal]
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
ALTER TABLE [dbo].[Invoices] ADD  DEFAULT ('0') FOR [CGST]
GO
ALTER TABLE [dbo].[Invoices] ADD  DEFAULT ('0') FOR [SGST]
GO
ALTER TABLE [dbo].[JobTypes] ADD  CONSTRAINT [DF_JobTypes_Rate]  DEFAULT ((0)) FOR [Rate]
GO
ALTER TABLE [dbo].[JobTypes] ADD  CONSTRAINT [DF_JobTypes_IsInspectionList]  DEFAULT ((0)) FOR [IsInspectionList]
GO
ALTER TABLE [dbo].[JobTypes] ADD  DEFAULT ('0') FOR [Gst]
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
ALTER TABLE [dbo].[Products] ADD  DEFAULT ('0') FOR [HSN]
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
ALTER TABLE [dbo].[Vehicles] ADD  DEFAULT ('0') FOR [Mileage]
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
USE [master]
GO
ALTER DATABASE [SmartGarage_Default_v1] SET  READ_WRITE 
GO
