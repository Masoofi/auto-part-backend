import * as __rspack_external__nestjs_cache_manager_c5b7907b from "@nestjs/cache-manager";
import * as __rspack_external__nestjs_common_a04939da from "@nestjs/common";
import * as __rspack_external__nestjs_config_8f4d8a2e from "@nestjs/config";
import * as __rspack_external__nestjs_core_d7b00a1a from "@nestjs/core";
import * as __rspack_external__nestjs_jwt_50c0e0ae from "@nestjs/jwt";
import * as __rspack_external__nestjs_mapped_types_c6767e13 from "@nestjs/mapped-types";
import * as __rspack_external__nestjs_passport_18907953 from "@nestjs/passport";
import * as __rspack_external__nestjs_swagger_7cd450b5 from "@nestjs/swagger";
import * as __rspack_external__prisma_adapter_pg_602d970f from "@prisma/adapter-pg";
import * as __rspack_external__prisma_client_runtime_client_3eef4bb7 from "@prisma/client/runtime/client";
import * as __rspack_external_bcrypt from "bcrypt";
import * as __rspack_external_class_transformer_c5a479fb from "class-transformer";
import * as __rspack_external_class_validator_7b99ef4d from "class-validator";
import * as __rspack_external_crypto from "crypto";
import * as __rspack_external_node_path_806ed179 from "node:path";
import * as __rspack_external_node_url_3991086a from "node:url";
import * as __rspack_external_nodemailer from "nodemailer";
import * as __rspack_external_passport_jwt_dfbe26e1 from "passport-jwt";
import * as __rspack_external_pg from "pg";
import * as __rspack_external_razorpay from "razorpay";
import * as __rspack_external_rxjs from "rxjs";
var __webpack_modules__ = ({
15(module) {

module.exports = __rspack_external__nestjs_cache_manager_c5b7907b;


},
3(module) {

module.exports = __rspack_external__nestjs_common_a04939da;


},
16(module) {

module.exports = __rspack_external__nestjs_config_8f4d8a2e;


},
1(module) {

module.exports = __rspack_external__nestjs_core_d7b00a1a;


},
54(module) {

module.exports = __rspack_external__nestjs_jwt_50c0e0ae;


},
34(module) {

module.exports = __rspack_external__nestjs_mapped_types_c6767e13;


},
13(module) {

module.exports = __rspack_external__nestjs_passport_18907953;


},
31(module) {

module.exports = __rspack_external__nestjs_swagger_7cd450b5;


},
19(module) {

module.exports = __rspack_external__prisma_adapter_pg_602d970f;


},
24(module) {

module.exports = __rspack_external__prisma_client_runtime_client_3eef4bb7;


},
47(module) {

module.exports = __rspack_external_bcrypt;


},
38(module) {

module.exports = __rspack_external_class_transformer_c5a479fb;


},
36(module) {

module.exports = __rspack_external_class_validator_7b99ef4d;


},
60(module) {

module.exports = __rspack_external_crypto;


},
21(module) {

module.exports = __rspack_external_node_path_806ed179;


},
22(module) {

module.exports = __rspack_external_node_url_3991086a;


},
57(module) {

module.exports = __rspack_external_nodemailer;


},
64(module) {

module.exports = __rspack_external_passport_jwt_dfbe26e1;


},
27(module) {

module.exports = __rspack_external_pg;


},
80(module) {

module.exports = __rspack_external_razorpay;


},
7(module) {

module.exports = __rspack_external_rxjs;


},
14(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CacheManagerModule: () => (CacheManagerModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _nestjs_cache_manager__rspack_import_1 = __webpack_require__(15);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}


class CacheManagerModule {
}
CacheManagerModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Global)(),
    (0,_nestjs_common__rspack_import_0.Module)({
        imports: [
            _nestjs_cache_manager__rspack_import_1.CacheModule.register({
                isGlobal: true,
                ttl: 300000,
                max: 100
            })
        ],
        exports: [
            _nestjs_cache_manager__rspack_import_1.CacheModule
        ]
    })
], CacheManagerModule);


},
8(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RESPONSE_MESSAGE_KEY: () => (RESPONSE_MESSAGE_KEY),
  ResponseMessage: () => (ResponseMessage)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);

const RESPONSE_MESSAGE_KEY = 'response_message';
const ResponseMessage = (message)=>(0,_nestjs_common__rspack_import_0.SetMetadata)(RESPONSE_MESSAGE_KEY, message);


},
11(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ROLES_KEY: () => (ROLES_KEY),
  Roles: () => (Roles)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);

const ROLES_KEY = 'roles';
const Roles = (...roles)=>(0,_nestjs_common__rspack_import_0.SetMetadata)(ROLES_KEY, roles);


},
37(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PaginationDto: () => (PaginationDto)
});
/* import */ var class_transformer__rspack_import_0 = __webpack_require__(38);
/* import */ var class_validator__rspack_import_1 = __webpack_require__(36);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}


class PaginationDto {
    constructor(){
        _define_property(this, "page", 1);
        _define_property(this, "limit", 10);
    }
}
_ts_decorate([
    (0,class_validator__rspack_import_1.IsOptional)(),
    (0,class_transformer__rspack_import_0.Type)(()=>Number),
    (0,class_validator__rspack_import_1.IsInt)(),
    (0,class_validator__rspack_import_1.Min)(1),
    _ts_metadata("design:type", Number)
], PaginationDto.prototype, "page", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_1.IsOptional)(),
    (0,class_transformer__rspack_import_0.Type)(()=>Number),
    (0,class_validator__rspack_import_1.IsInt)(),
    (0,class_validator__rspack_import_1.Min)(1),
    (0,class_validator__rspack_import_1.Max)(100),
    _ts_metadata("design:type", Number)
], PaginationDto.prototype, "limit", void 0);


},
9(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  HttpExceptionFilter: () => (HttpExceptionFilter)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const statusCode = exception instanceof _nestjs_common__rspack_import_0.HttpException ? exception.getStatus() : _nestjs_common__rspack_import_0.HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal server error';
        if (exception instanceof _nestjs_common__rspack_import_0.HttpException) {
            const exceptionResponse = exception.getResponse();
            if (typeof exceptionResponse === 'string') {
                message = exceptionResponse;
            } else if (typeof exceptionResponse === 'object' && exceptionResponse !== null && 'message' in exceptionResponse) {
                const errorMessage = exceptionResponse.message;
                message = Array.isArray(errorMessage) ? errorMessage.join(', ') : typeof errorMessage === 'string' ? errorMessage : exception.message;
            } else {
                message = exception.message;
            }
        }
        response.status(statusCode).json({
            success: false,
            statusCode,
            message,
            data: null,
            timestamp: new Date().toISOString()
        });
    }
}
HttpExceptionFilter = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Catch)()
], HttpExceptionFilter);


},
12(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AuthGuard: () => (AuthGuard)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _nestjs_passport__rspack_import_1 = __webpack_require__(13);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}


class AuthGuard extends (0,_nestjs_passport__rspack_import_1.AuthGuard)('jwt') {
}
AuthGuard = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)()
], AuthGuard);


},
10(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PermissionGuard: () => (PermissionGuard)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _nestjs_core__rspack_import_1 = __webpack_require__(1);
/* import */ var _decorators_roles_decorator_js__rspack_import_2 = __webpack_require__(11);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}



class PermissionGuard {
    canActivate(context) {
        const requiredRoles = this.reflector.getAllAndOverride(_decorators_roles_decorator_js__rspack_import_2.ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ]);
        // No role restriction means any authenticated user can continue.
        if (!requiredRoles || requiredRoles.length === 0) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (!user) {
            return false;
        }
        return requiredRoles.includes(user.role);
    }
    constructor(reflector){
        _define_property(this, "reflector", void 0);
        this.reflector = reflector;
    }
}
PermissionGuard = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _nestjs_core__rspack_import_1.Reflector === "undefined" ? Object : _nestjs_core__rspack_import_1.Reflector
    ])
], PermissionGuard);


},
32(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RolesGuard: () => (RolesGuard)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _nestjs_core__rspack_import_1 = __webpack_require__(1);
/* import */ var _decorators_roles_decorator_js__rspack_import_2 = __webpack_require__(11);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}



class RolesGuard {
    canActivate(context) {
        const requiredRoles = this.reflector.getAllAndOverride(_decorators_roles_decorator_js__rspack_import_2.ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ]);
        if (!requiredRoles?.length) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (!user || !requiredRoles.includes(user.role)) {
            throw new _nestjs_common__rspack_import_0.ForbiddenException('You do not have permission to perform this action');
        }
        return true;
    }
    constructor(reflector){
        _define_property(this, "reflector", void 0);
        this.reflector = reflector;
    }
}
RolesGuard = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _nestjs_core__rspack_import_1.Reflector === "undefined" ? Object : _nestjs_core__rspack_import_1.Reflector
    ])
], RolesGuard);


},
6(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ResponseInterceptor: () => (ResponseInterceptor)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _nestjs_core__rspack_import_1 = __webpack_require__(1);
/* import */ var rxjs__rspack_import_2 = __webpack_require__(7);
/* import */ var _decorators_response_message_decorator_js__rspack_import_3 = __webpack_require__(8);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}




class ResponseInterceptor {
    intercept(context, next) {
        const response = context.switchToHttp().getResponse();
        const statusCode = response.statusCode;
        const message = this.reflector.getAllAndOverride(_decorators_response_message_decorator_js__rspack_import_3.RESPONSE_MESSAGE_KEY, [
            context.getHandler(),
            context.getClass()
        ]) ?? 'Request successful';
        return next.handle().pipe((0,rxjs__rspack_import_2.map)((data)=>({
                success: statusCode >= 200 && statusCode < 300,
                statusCode,
                message,
                data: data ?? null,
                timestamp: new Date().toISOString()
            })));
    }
    constructor(reflector){
        _define_property(this, "reflector", void 0);
        this.reflector = reflector;
    }
}
ResponseInterceptor = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _nestjs_core__rspack_import_1.Reflector === "undefined" ? Object : _nestjs_core__rspack_import_1.Reflector
    ])
], ResponseInterceptor);


},
55(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MailModule: () => (MailModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _mail_service_js__rspack_import_1 = __webpack_require__(56);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}


class MailModule {
}
MailModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        providers: [
            _mail_service_js__rspack_import_1.MailService
        ],
        exports: [
            _mail_service_js__rspack_import_1.MailService
        ]
    })
], MailModule);


},
56(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MailService: () => (MailService)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _nestjs_config__rspack_import_1 = __webpack_require__(16);
/* import */ var nodemailer__rspack_import_2 = __webpack_require__(57);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}



class MailService {
    async sendPasswordResetEmail(email, resetLink) {
        await this.transporter.sendMail({
            from: this.configService.get('MAIL_USER'),
            to: email,
            subject: 'Reset Your Password',
            html: `
        <h2>Password Reset Request</h2>
        <p>Click the link below to reset your password.</p>
        <a href="${resetLink}">Reset Password</a>
        <p>This link expires in 15 minutes.</p>
        <p>If you didn't request this, ignore this email.</p>
      `
        });
    }
    constructor(configService){
        _define_property(this, "configService", void 0);
        _define_property(this, "transporter", void 0);
        this.configService = configService;
        this.transporter = nodemailer__rspack_import_2.createTransport({
            host: this.configService.get('MAIL_HOST'),
            port: Number(this.configService.get('MAIL_PORT')),
            secure: false,
            auth: {
                user: this.configService.get('MAIL_USER'),
                pass: this.configService.get('MAIL_PASSWORD')
            }
        });
    }
}
MailService = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _nestjs_config__rspack_import_1.ConfigService === "undefined" ? Object : _nestjs_config__rspack_import_1.ConfigService
    ])
], MailService);


},
4(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SharedModule: () => (SharedModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _nestjs_core__rspack_import_1 = __webpack_require__(1);
/* import */ var _shared_service_js__rspack_import_2 = __webpack_require__(5);
/* import */ var _interceptors_response_interceptor_js__rspack_import_3 = __webpack_require__(6);
/* import */ var _filters_http_exception_filter_js__rspack_import_4 = __webpack_require__(9);
/* import */ var _guards_permission_guard_js__rspack_import_5 = __webpack_require__(10);
/* import */ var _guards_auth_guard_js__rspack_import_6 = __webpack_require__(12);
/* import */ var _cache_manager_cache_manager_module_js__rspack_import_7 = __webpack_require__(14);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}








class SharedModule {
}
SharedModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Global)(),
    (0,_nestjs_common__rspack_import_0.Module)({
        providers: [
            _shared_service_js__rspack_import_2.SharedService,
            // Global response interceptor
            {
                provide: _nestjs_core__rspack_import_1.APP_INTERCEPTOR,
                useClass: _interceptors_response_interceptor_js__rspack_import_3.ResponseInterceptor
            },
            // Global exception filter
            {
                provide: _nestjs_core__rspack_import_1.APP_FILTER,
                useClass: _filters_http_exception_filter_js__rspack_import_4.HttpExceptionFilter
            },
            _guards_auth_guard_js__rspack_import_6.AuthGuard,
            _guards_permission_guard_js__rspack_import_5.PermissionGuard
        ],
        exports: [
            _shared_service_js__rspack_import_2.SharedService,
            _guards_auth_guard_js__rspack_import_6.AuthGuard,
            _guards_permission_guard_js__rspack_import_5.PermissionGuard,
            _cache_manager_cache_manager_module_js__rspack_import_7.CacheManagerModule
        ],
        imports: [
            _cache_manager_cache_manager_module_js__rspack_import_7.CacheManagerModule
        ]
    })
], SharedModule);


},
5(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SharedService: () => (SharedService)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

class SharedService {
}
SharedService = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)()
], SharedService);


},
17(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AppController: () => (AppController)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _prisma_prisma_service_js__rspack_import_1 = __webpack_require__(18);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}


class AppController {
    async checkHealth() {
        try {
            await this.prisma.$queryRaw`SELECT 1`;
            return {
                status: 'ok',
                message: 'Backend and PostgreSQL are connected through Prisma'
            };
        } catch (error) {
            return {
                status: 'error',
                message: 'Prisma database connection failed',
                details: error instanceof Error ? error.message : 'Unknown database error'
            };
        }
    }
    constructor(prisma){
        _define_property(this, "prisma", void 0);
        this.prisma = prisma;
    }
}
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Get)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], AppController.prototype, "checkHealth", null);
AppController = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Controller)('health'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prisma_prisma_service_js__rspack_import_1.PrismaService === "undefined" ? Object : _prisma_prisma_service_js__rspack_import_1.PrismaService
    ])
], AppController);


},
2(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AppModule: () => (AppModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _libs_shared_src_shared_module_js__rspack_import_1 = __webpack_require__(4);
/* import */ var _nestjs_config__rspack_import_2 = __webpack_require__(16);
/* import */ var _app_controller_js__rspack_import_3 = __webpack_require__(17);
/* import */ var pg__rspack_import_4 = __webpack_require__(27);
/* import */ var _prisma_prisma_module_js__rspack_import_5 = __webpack_require__(28);
/* import */ var _categories_categories_service_js__rspack_import_6 = __webpack_require__(29);
/* import */ var _categories_categories_controller_js__rspack_import_7 = __webpack_require__(30);
/* import */ var _categories_categories_module_js__rspack_import_8 = __webpack_require__(39);
/* import */ var _products_products_service_js__rspack_import_9 = __webpack_require__(40);
/* import */ var _products_products_module_js__rspack_import_10 = __webpack_require__(41);
/* import */ var _products_products_controller_js__rspack_import_11 = __webpack_require__(42);
/* import */ var _users_users_service_js__rspack_import_12 = __webpack_require__(46);
/* import */ var _users_users_controller_js__rspack_import_13 = __webpack_require__(48);
/* import */ var _users_users_module_js__rspack_import_14 = __webpack_require__(52);
/* import */ var _auth_auth_module_js__rspack_import_15 = __webpack_require__(53);
/* import */ var _cart_cart_module_js__rspack_import_16 = __webpack_require__(65);
/* import */ var _orders_orders_module_js__rspack_import_17 = __webpack_require__(70);
/* import */ var _payments_payments_module_js__rspack_import_18 = __webpack_require__(76);
/* import */ var _stats_stats_module_js__rspack_import_19 = __webpack_require__(83);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}




















class AppModule {
}
AppModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        imports: [
            _nestjs_config__rspack_import_2.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '../.env'
            }),
            _libs_shared_src_shared_module_js__rspack_import_1.SharedModule,
            _prisma_prisma_module_js__rspack_import_5.PrismaModule,
            _categories_categories_module_js__rspack_import_8.CategoriesModule,
            _products_products_module_js__rspack_import_10.ProductsModule,
            _users_users_module_js__rspack_import_14.UsersModule,
            _auth_auth_module_js__rspack_import_15.AuthModule,
            _cart_cart_module_js__rspack_import_16.CartModule,
            _orders_orders_module_js__rspack_import_17.OrdersModule,
            _payments_payments_module_js__rspack_import_18.PaymentsModule,
            _stats_stats_module_js__rspack_import_19.StatsModule
        ],
        controllers: [
            _app_controller_js__rspack_import_3.AppController,
            _categories_categories_controller_js__rspack_import_7.CategoriesController,
            _products_products_controller_js__rspack_import_11.ProductsController,
            _users_users_controller_js__rspack_import_13.UsersController
        ],
        providers: [
            {
                provide: 'PG_POOL',
                useFactory: ()=>new pg__rspack_import_4.Pool({
                        host: process.env.DB_HOST || 'localhost',
                        port: Number(process.env.DB_PORT || 5432),
                        user: process.env.DB_USERNAME,
                        password: process.env.DB_PASSWORD,
                        database: process.env.DB_DATABASE
                    })
            },
            _categories_categories_service_js__rspack_import_6.CategoriesService,
            _products_products_service_js__rspack_import_9.ProductsService,
            _users_users_service_js__rspack_import_12.UsersService
        ],
        exports: [
            'PG_POOL'
        ]
    })
], AppModule);


},
58(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AuthController: () => (AuthController)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _auth_service_js__rspack_import_1 = __webpack_require__(59);
/* import */ var _dto_login_dto_js__rspack_import_2 = __webpack_require__(61);
/* import */ var _libs_shared_src_guards_auth_guard_js__rspack_import_3 = __webpack_require__(12);
/* import */ var _libs_shared_src_decorators_roles_decorator_js__rspack_import_4 = __webpack_require__(11);
/* import */ var _libs_shared_src_guards_permission_guard_js__rspack_import_5 = __webpack_require__(10);
/* import */ var _dto_forgot_password_dto_js__rspack_import_6 = __webpack_require__(62);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}







class AuthController {
    login(loginDto) {
        return this.authService.login(loginDto);
    }
    getProfile(request) {
        return request.user;
    }
    adminCheck() {
        return {
            message: "Welcome Admin!"
        };
    }
    async forgotPassword(dto) {
        return this.authService.forgotPassword(dto);
    }
    constructor(authService){
        _define_property(this, "authService", void 0);
        this.authService = authService;
    }
}
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Post)("login"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dto_login_dto_js__rspack_import_2.LoginDto === "undefined" ? Object : _dto_login_dto_js__rspack_import_2.LoginDto
    ]),
    _ts_metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Get)("profile"),
    (0,_nestjs_common__rspack_import_0.UseGuards)(_libs_shared_src_guards_auth_guard_js__rspack_import_3.AuthGuard),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Req)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object
    ]),
    _ts_metadata("design:returntype", void 0)
], AuthController.prototype, "getProfile", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Get)("admin-check"),
    (0,_nestjs_common__rspack_import_0.UseGuards)(_libs_shared_src_guards_auth_guard_js__rspack_import_3.AuthGuard, _libs_shared_src_guards_permission_guard_js__rspack_import_5.PermissionGuard),
    (0,_libs_shared_src_decorators_roles_decorator_js__rspack_import_4.Roles)("ADMIN"),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", void 0)
], AuthController.prototype, "adminCheck", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Post)("forgot-password"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dto_forgot_password_dto_js__rspack_import_6.ForgotPasswordDto === "undefined" ? Object : _dto_forgot_password_dto_js__rspack_import_6.ForgotPasswordDto
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
AuthController = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Controller)("auth"),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _auth_service_js__rspack_import_1.AuthService === "undefined" ? Object : _auth_service_js__rspack_import_1.AuthService
    ])
], AuthController);


},
53(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AuthModule: () => (AuthModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _nestjs_jwt__rspack_import_1 = __webpack_require__(54);
/* import */ var _nestjs_config__rspack_import_2 = __webpack_require__(16);
/* import */ var _nestjs_passport__rspack_import_3 = __webpack_require__(13);
/* import */ var _libs_shared_src_mail_mail_module_js__rspack_import_4 = __webpack_require__(55);
/* import */ var _auth_controller_js__rspack_import_5 = __webpack_require__(58);
/* import */ var _auth_service_js__rspack_import_6 = __webpack_require__(59);
/* import */ var _users_users_module_js__rspack_import_7 = __webpack_require__(52);
/* import */ var _strategies_jwt_strategy_js__rspack_import_8 = __webpack_require__(63);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}









class AuthModule {
}
AuthModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        imports: [
            _nestjs_config__rspack_import_2.ConfigModule,
            _users_users_module_js__rspack_import_7.UsersModule,
            _libs_shared_src_mail_mail_module_js__rspack_import_4.MailModule,
            _nestjs_passport__rspack_import_3.PassportModule.register({
                defaultStrategy: "jwt"
            }),
            _nestjs_jwt__rspack_import_1.JwtModule.registerAsync({
                imports: [
                    _nestjs_config__rspack_import_2.ConfigModule,
                    _libs_shared_src_mail_mail_module_js__rspack_import_4.MailModule
                ],
                inject: [
                    _nestjs_config__rspack_import_2.ConfigService
                ],
                useFactory: (configService)=>({
                        secret: configService.getOrThrow("JWT_SECRET"),
                        signOptions: {
                            expiresIn: "1d"
                        }
                    })
            })
        ],
        controllers: [
            _auth_controller_js__rspack_import_5.AuthController
        ],
        providers: [
            _auth_service_js__rspack_import_6.AuthService,
            _strategies_jwt_strategy_js__rspack_import_8.JwtStrategy
        ]
    })
], AuthModule);


},
59(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AuthService: () => (AuthService)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _nestjs_jwt__rspack_import_1 = __webpack_require__(54);
/* import */ var bcrypt__rspack_import_2 = __webpack_require__(47);
/* import */ var crypto__rspack_import_3 = __webpack_require__(60);
/* import */ var _nestjs_config__rspack_import_4 = __webpack_require__(16);
/* import */ var _libs_shared_src_mail_mail_service_js__rspack_import_5 = __webpack_require__(56);
/* import */ var _users_users_service_js__rspack_import_6 = __webpack_require__(46);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}







class AuthService {
    async login(loginDto) {
        const { email, password } = loginDto;
        // Find user
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            throw new _nestjs_common__rspack_import_0.UnauthorizedException("Invalid email or password");
        }
        // Check password
        const isPasswordValid = await bcrypt__rspack_import_2.compare(password, user.password);
        if (!isPasswordValid) {
            throw new _nestjs_common__rspack_import_0.UnauthorizedException("Invalid email or password");
        }
        // Check account status
        if (!user.isActive) {
            throw new _nestjs_common__rspack_import_0.UnauthorizedException("Your account is inactive");
        }
        // JWT payload
        const payload = {
            sub: user.id,
            email: user.email,
            role: user.role
        };
        // Generate token
        const accessToken = await this.jwtService.signAsync(payload);
        return {
            access_token: accessToken,
            user: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role
            }
        };
    }
    async forgotPassword(dto) {
        const { email } = dto;
        const successMessage = "If an account exists with this email, a password reset link will be sent.";
        // 1. Find user
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            return {
                message: successMessage
            };
        }
        // 2. Generate secure random token
        const resetToken = (0,crypto__rspack_import_3.randomBytes)(32).toString("hex");
        // 3. Hash token
        const hashedToken = (0,crypto__rspack_import_3.createHash)("sha256").update(resetToken).digest("hex");
        // 4. Set expiration (15 minutes)
        const expiresAt = new Date(Date.now() + 15 * 60 * 1000);
        // 5. Save hashed token
        await this.usersService.updatePasswordResetToken(user.id, hashedToken, expiresAt);
        // 6. Get frontend URL
        const frontendUrl = this.configService.get("FRONTEND_URL");
        if (!frontendUrl) {
            throw new Error("FRONTEND_URL is not configured");
        }
        // 7. Create reset link
        const resetLink = `${frontendUrl}/reset-password?token=${resetToken}`;
        // 8. Send email
        await this.mailService.sendPasswordResetEmail(email, resetLink);
        return {
            message: successMessage
        };
    }
    constructor(usersService, jwtService, configService, mailService){
        _define_property(this, "usersService", void 0);
        _define_property(this, "jwtService", void 0);
        _define_property(this, "configService", void 0);
        _define_property(this, "mailService", void 0);
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.configService = configService;
        this.mailService = mailService;
    }
}
AuthService = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _users_users_service_js__rspack_import_6.UsersService === "undefined" ? Object : _users_users_service_js__rspack_import_6.UsersService,
        typeof _nestjs_jwt__rspack_import_1.JwtService === "undefined" ? Object : _nestjs_jwt__rspack_import_1.JwtService,
        typeof _nestjs_config__rspack_import_4.ConfigService === "undefined" ? Object : _nestjs_config__rspack_import_4.ConfigService,
        typeof _libs_shared_src_mail_mail_service_js__rspack_import_5.MailService === "undefined" ? Object : _libs_shared_src_mail_mail_service_js__rspack_import_5.MailService
    ])
], AuthService);


},
62(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ForgotPasswordDto: () => (ForgotPasswordDto)
});
/* import */ var class_validator__rspack_import_0 = __webpack_require__(36);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}

class ForgotPasswordDto {
    constructor(){
        _define_property(this, "email", void 0);
    }
}
_ts_decorate([
    (0,class_validator__rspack_import_0.IsEmail)(),
    (0,class_validator__rspack_import_0.IsNotEmpty)(),
    _ts_metadata("design:type", String)
], ForgotPasswordDto.prototype, "email", void 0);


},
61(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LoginDto: () => (LoginDto)
});
/* import */ var class_validator__rspack_import_0 = __webpack_require__(36);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}

class LoginDto {
    constructor(){
        _define_property(this, "email", void 0);
        _define_property(this, "password", void 0);
    }
}
_ts_decorate([
    (0,class_validator__rspack_import_0.IsEmail)(),
    _ts_metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.IsNotEmpty)(),
    (0,class_validator__rspack_import_0.MinLength)(8),
    _ts_metadata("design:type", String)
], LoginDto.prototype, "password", void 0);


},
63(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  JwtStrategy: () => (JwtStrategy)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _nestjs_config__rspack_import_1 = __webpack_require__(16);
/* import */ var _nestjs_passport__rspack_import_2 = __webpack_require__(13);
/* import */ var passport_jwt__rspack_import_3 = __webpack_require__(64);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}




class JwtStrategy extends (0,_nestjs_passport__rspack_import_2.PassportStrategy)(passport_jwt__rspack_import_3.Strategy) {
    validate(payload) {
        return {
            id: payload.sub,
            email: payload.email,
            role: payload.role
        };
    }
    constructor(configService){
        super({
            jwtFromRequest: passport_jwt__rspack_import_3.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.getOrThrow('JWT_SECRET')
        });
    }
}
JwtStrategy = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _nestjs_config__rspack_import_1.ConfigService === "undefined" ? Object : _nestjs_config__rspack_import_1.ConfigService
    ])
], JwtStrategy);


},
66(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CartController: () => (CartController)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _cart_service_js__rspack_import_1 = __webpack_require__(67);
/* import */ var _dto_add_cart_item_dto_js__rspack_import_2 = __webpack_require__(68);
/* import */ var _libs_shared_src_guards_auth_guard_js__rspack_import_3 = __webpack_require__(12);
/* import */ var _libs_shared_src_decorators_response_message_decorator_js__rspack_import_4 = __webpack_require__(8);
/* import */ var _dto_update_cart_item_dto_js__rspack_import_5 = __webpack_require__(69);
/* import */ var _nestjs_swagger__rspack_import_6 = __webpack_require__(31);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}







class CartController {
    addItem(request, dto) {
        return this.cartService.addItem(request.user.id, dto);
    }
    getCart(request) {
        return this.cartService.getCart(request.user.id);
    }
    updateItem(request, itemId, dto) {
        return this.cartService.updateItem(request.user.id, itemId, dto.quantity);
    }
    removeItem(request, itemId) {
        return this.cartService.removeItem(request.user.id, itemId);
    }
    clearCart(request) {
        return this.cartService.clearCart(request.user.id);
    }
    constructor(cartService){
        _define_property(this, "cartService", void 0);
        this.cartService = cartService;
    }
}
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Post)("items"),
    (0,_libs_shared_src_decorators_response_message_decorator_js__rspack_import_4.ResponseMessage)("Product added to cart successfully"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Req)()),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof AuthenticatedRequest === "undefined" ? Object : AuthenticatedRequest,
        typeof _dto_add_cart_item_dto_js__rspack_import_2.AddCartItemDto === "undefined" ? Object : _dto_add_cart_item_dto_js__rspack_import_2.AddCartItemDto
    ]),
    _ts_metadata("design:returntype", void 0)
], CartController.prototype, "addItem", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Get)(),
    (0,_libs_shared_src_decorators_response_message_decorator_js__rspack_import_4.ResponseMessage)("Cart retrieved successfully"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Req)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof AuthenticatedRequest === "undefined" ? Object : AuthenticatedRequest
    ]),
    _ts_metadata("design:returntype", void 0)
], CartController.prototype, "getCart", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Patch)("items/:itemId"),
    (0,_libs_shared_src_decorators_response_message_decorator_js__rspack_import_4.ResponseMessage)("Cart item quantity updated successfully"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Req)()),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Param)("itemId")),
    _ts_param(2, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof AuthenticatedRequest === "undefined" ? Object : AuthenticatedRequest,
        String,
        typeof _dto_update_cart_item_dto_js__rspack_import_5.UpdateCartItemDto === "undefined" ? Object : _dto_update_cart_item_dto_js__rspack_import_5.UpdateCartItemDto
    ]),
    _ts_metadata("design:returntype", void 0)
], CartController.prototype, "updateItem", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Delete)("items/:itemId"),
    (0,_libs_shared_src_decorators_response_message_decorator_js__rspack_import_4.ResponseMessage)("Cart item removed successfully"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Req)()),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Param)("itemId")),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof AuthenticatedRequest === "undefined" ? Object : AuthenticatedRequest,
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], CartController.prototype, "removeItem", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Delete)(),
    (0,_libs_shared_src_decorators_response_message_decorator_js__rspack_import_4.ResponseMessage)("Cart cleared successfully"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Req)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof AuthenticatedRequest === "undefined" ? Object : AuthenticatedRequest
    ]),
    _ts_metadata("design:returntype", void 0)
], CartController.prototype, "clearCart", null);
CartController = _ts_decorate([
    (0,_nestjs_swagger__rspack_import_6.ApiTags)("Cart"),
    (0,_nestjs_common__rspack_import_0.Controller)("cart"),
    (0,_nestjs_common__rspack_import_0.UseGuards)(_libs_shared_src_guards_auth_guard_js__rspack_import_3.AuthGuard),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _cart_service_js__rspack_import_1.CartService === "undefined" ? Object : _cart_service_js__rspack_import_1.CartService
    ])
], CartController);


},
65(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CartModule: () => (CartModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _cart_controller_js__rspack_import_1 = __webpack_require__(66);
/* import */ var _cart_service_js__rspack_import_2 = __webpack_require__(67);
/* import */ var _prisma_prisma_module_js__rspack_import_3 = __webpack_require__(28);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}




class CartModule {
}
CartModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        imports: [
            _prisma_prisma_module_js__rspack_import_3.PrismaModule
        ],
        controllers: [
            _cart_controller_js__rspack_import_1.CartController
        ],
        providers: [
            _cart_service_js__rspack_import_2.CartService
        ],
        exports: [
            _cart_service_js__rspack_import_2.CartService
        ]
    })
], CartModule);


},
67(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CartService: () => (CartService)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _prisma_prisma_service_js__rspack_import_1 = __webpack_require__(18);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}


class CartService {
    async addItem(userId, dto) {
        const { productId, quantity } = dto;
        return this.prisma.$transaction(async (tx)=>{
            // 1. Find the product
            const product = await tx.product.findUnique({
                where: {
                    id: productId
                }
            });
            if (!product) {
                throw new _nestjs_common__rspack_import_0.NotFoundException("Product not found");
            }
            // 2. Check whether product is active
            if (!product.isActive) {
                throw new _nestjs_common__rspack_import_0.BadRequestException("This product is currently unavailable");
            }
            // 3. Find existing cart or create a new one
            const cart = await tx.cart.upsert({
                where: {
                    userId
                },
                update: {},
                create: {
                    userId
                }
            });
            // 4. Check whether this product is already in the cart
            const existingItem = await tx.cartItem.findUnique({
                where: {
                    cartId_productId: {
                        cartId: cart.id,
                        productId
                    }
                }
            });
            // 5. Calculate the new quantity
            const newQuantity = (existingItem?.quantity ?? 0) + quantity;
            // 6. Check available stock
            if (newQuantity > product.stock) {
                throw new _nestjs_common__rspack_import_0.BadRequestException(`Only ${product.stock} items are available in stock`);
            }
            // 7. Create or update cart item
            if (existingItem) {
                await tx.cartItem.update({
                    where: {
                        id: existingItem.id
                    },
                    data: {
                        quantity: newQuantity
                    }
                });
            } else {
                await tx.cartItem.create({
                    data: {
                        cartId: cart.id,
                        productId,
                        quantity
                    }
                });
            }
            // 8. Return the updated cart
            return tx.cart.findUnique({
                where: {
                    id: cart.id
                },
                include: {
                    items: {
                        include: {
                            product: {
                                select: {
                                    id: true,
                                    name: true,
                                    sku: true,
                                    price: true,
                                    stock: true,
                                    imageUrl: true
                                }
                            }
                        }
                    }
                }
            });
        });
    }
    async getCart(userId) {
        // 1. Find the logged-in user's cart
        const cart = await this.prisma.cart.findUnique({
            where: {
                userId
            },
            include: {
                items: {
                    include: {
                        product: {
                            select: {
                                id: true,
                                name: true,
                                sku: true,
                                price: true,
                                stock: true,
                                imageUrl: true,
                                isActive: true
                            }
                        }
                    }
                }
            }
        });
        // 2. If cart doesn't exist, return an empty cart
        if (!cart) {
            return {
                id: null,
                userId,
                items: [],
                summary: {
                    uniqueItems: 0,
                    totalQuantity: 0,
                    subtotal: "0.00"
                }
            };
        }
        // 3. Calculate subtotal using Prisma Decimal
        const subtotal = cart.items.length > 0 ? cart.items.reduce((total, item)=>total.plus(item.product.price.mul(item.quantity)), cart.items[0].product.price.mul(0)).toFixed(2) : "0.00";
        // 4. Calculate individual item totals
        const items = cart.items.map((item)=>({
                id: item.id,
                productId: item.productId,
                quantity: item.quantity,
                product: item.product,
                lineTotal: item.product.price.mul(item.quantity).toFixed(2)
            }));
        // 5. Calculate total quantity
        const totalQuantity = cart.items.reduce((total, item)=>total + item.quantity, 0);
        return {
            id: cart.id,
            userId: cart.userId,
            items,
            summary: {
                uniqueItems: cart.items.length,
                totalQuantity,
                subtotal
            }
        };
    }
    async updateItem(userId, itemId, quantity) {
        // 1. Find the cart item belonging to this user
        const cartItem = await this.prisma.cartItem.findFirst({
            where: {
                id: itemId,
                cart: {
                    userId
                }
            },
            include: {
                product: true
            }
        });
        if (!cartItem) {
            throw new _nestjs_common__rspack_import_0.NotFoundException("Cart item not found");
        }
        // 2. Check whether product is active
        if (!cartItem.product.isActive) {
            throw new _nestjs_common__rspack_import_0.BadRequestException("This product is currently unavailable");
        }
        // 3. Check available stock
        if (quantity > cartItem.product.stock) {
            throw new _nestjs_common__rspack_import_0.BadRequestException(`Only ${cartItem.product.stock} items are available in stock`);
        }
        // 4. Update quantity
        return this.prisma.cartItem.update({
            where: {
                id: itemId
            },
            data: {
                quantity
            },
            include: {
                product: {
                    select: {
                        id: true,
                        name: true,
                        sku: true,
                        price: true,
                        stock: true,
                        imageUrl: true
                    }
                }
            }
        });
    }
    async removeItem(userId, itemId) {
        // 1. Find the cart item belonging to this user
        const cartItem = await this.prisma.cartItem.findFirst({
            where: {
                id: itemId,
                cart: {
                    userId
                }
            }
        });
        if (!cartItem) {
            throw new _nestjs_common__rspack_import_0.NotFoundException("Cart item not found");
        }
        // 2. Remove the cart item
        await this.prisma.cartItem.delete({
            where: {
                id: itemId
            }
        });
        return this.getCart(userId);
    }
    async clearCart(userId) {
        // 1. Find the cart belonging to this user
        const cart = await this.prisma.cart.findFirst({
            where: {
                userId
            },
            include: {
                items: true
            }
        });
        if (!cart) {
            throw new _nestjs_common__rspack_import_0.NotFoundException("Cart not found");
        }
        // 2. Remove all cart items
        await this.prisma.cartItem.deleteMany({
            where: {
                cartId: cart.id
            }
        });
        return this.getCart(userId);
    }
    constructor(prisma){
        _define_property(this, "prisma", void 0);
        this.prisma = prisma;
    }
}
CartService = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prisma_prisma_service_js__rspack_import_1.PrismaService === "undefined" ? Object : _prisma_prisma_service_js__rspack_import_1.PrismaService
    ])
], CartService);


},
68(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AddCartItemDto: () => (AddCartItemDto)
});
/* import */ var class_validator__rspack_import_0 = __webpack_require__(36);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}

class AddCartItemDto {
    constructor(){
        _define_property(this, "productId", void 0);
        _define_property(this, "quantity", void 0);
    }
}
_ts_decorate([
    (0,class_validator__rspack_import_0.IsUUID)(),
    _ts_metadata("design:type", String)
], AddCartItemDto.prototype, "productId", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsInt)(),
    (0,class_validator__rspack_import_0.Min)(1),
    _ts_metadata("design:type", Number)
], AddCartItemDto.prototype, "quantity", void 0);


},
69(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UpdateCartItemDto: () => (UpdateCartItemDto)
});
/* import */ var class_validator__rspack_import_0 = __webpack_require__(36);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}

class UpdateCartItemDto {
    constructor(){
        _define_property(this, "quantity", void 0);
    }
}
_ts_decorate([
    (0,class_validator__rspack_import_0.IsInt)(),
    (0,class_validator__rspack_import_0.Min)(1),
    _ts_metadata("design:type", Number)
], UpdateCartItemDto.prototype, "quantity", void 0);


},
30(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CategoriesController: () => (CategoriesController)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _nestjs_swagger__rspack_import_1 = __webpack_require__(31);
/* import */ var _shared_shared_guards_auth_guard_js__rspack_import_2 = __webpack_require__(12);
/* import */ var _shared_shared_guards_roles_guard_js__rspack_import_3 = __webpack_require__(32);
/* import */ var _shared_shared_decorators_roles_decorator_js__rspack_import_4 = __webpack_require__(11);
/* import */ var _dto_update_category_dto_js__rspack_import_5 = __webpack_require__(33);
/* import */ var _categories_service_js__rspack_import_6 = __webpack_require__(29);
/* import */ var _dto_create_category_dto_js__rspack_import_7 = __webpack_require__(35);
/* import */ var _libs_shared_src_dto_pagination_dto_js__rspack_import_8 = __webpack_require__(37);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}









class CategoriesController {
    findAll(query) {
        return this.categoriesService.findAll(query.page, query.limit);
    }
    create(body) {
        return this.categoriesService.create(body.name);
    }
    update(id, body) {
        return this.categoriesService.update(String(id), body);
    }
    remove(id) {
        return this.categoriesService.remove(id);
    }
    constructor(categoriesService){
        _define_property(this, "categoriesService", void 0);
        this.categoriesService = categoriesService;
    }
}
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Get)(),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _libs_shared_src_dto_pagination_dto_js__rspack_import_8.PaginationDto === "undefined" ? Object : _libs_shared_src_dto_pagination_dto_js__rspack_import_8.PaginationDto
    ]),
    _ts_metadata("design:returntype", void 0)
], CategoriesController.prototype, "findAll", null);
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_1.ApiBearerAuth)(),
    (0,_nestjs_common__rspack_import_0.UseGuards)(_shared_shared_guards_auth_guard_js__rspack_import_2.AuthGuard, _shared_shared_guards_roles_guard_js__rspack_import_3.RolesGuard),
    (0,_shared_shared_decorators_roles_decorator_js__rspack_import_4.Roles)("ADMIN"),
    (0,_nestjs_common__rspack_import_0.Post)(),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dto_create_category_dto_js__rspack_import_7.CreateCategoryDto === "undefined" ? Object : _dto_create_category_dto_js__rspack_import_7.CreateCategoryDto
    ]),
    _ts_metadata("design:returntype", void 0)
], CategoriesController.prototype, "create", null);
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_1.ApiBearerAuth)(),
    (0,_nestjs_common__rspack_import_0.UseGuards)(_shared_shared_guards_auth_guard_js__rspack_import_2.AuthGuard, _shared_shared_guards_roles_guard_js__rspack_import_3.RolesGuard),
    (0,_shared_shared_decorators_roles_decorator_js__rspack_import_4.Roles)("ADMIN"),
    (0,_nestjs_common__rspack_import_0.Patch)(":id"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Param)("id")),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _dto_update_category_dto_js__rspack_import_5.UpdateCategoryDto === "undefined" ? Object : _dto_update_category_dto_js__rspack_import_5.UpdateCategoryDto
    ]),
    _ts_metadata("design:returntype", void 0)
], CategoriesController.prototype, "update", null);
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_1.ApiBearerAuth)(),
    (0,_nestjs_common__rspack_import_0.UseGuards)(_shared_shared_guards_auth_guard_js__rspack_import_2.AuthGuard, _shared_shared_guards_roles_guard_js__rspack_import_3.RolesGuard),
    (0,_shared_shared_decorators_roles_decorator_js__rspack_import_4.Roles)("ADMIN"),
    (0,_nestjs_common__rspack_import_0.Delete)(":id"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Param)("id", _nestjs_common__rspack_import_0.ParseUUIDPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], CategoriesController.prototype, "remove", null);
CategoriesController = _ts_decorate([
    (0,_nestjs_swagger__rspack_import_1.ApiTags)("Categories"),
    (0,_nestjs_common__rspack_import_0.Controller)("categories"),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _categories_service_js__rspack_import_6.CategoriesService === "undefined" ? Object : _categories_service_js__rspack_import_6.CategoriesService
    ])
], CategoriesController);


},
39(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CategoriesModule: () => (CategoriesModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _categories_controller_js__rspack_import_1 = __webpack_require__(30);
/* import */ var _categories_service_js__rspack_import_2 = __webpack_require__(29);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}



class CategoriesModule {
}
CategoriesModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        controllers: [
            _categories_controller_js__rspack_import_1.CategoriesController
        ],
        providers: [
            _categories_service_js__rspack_import_2.CategoriesService
        ]
    })
], CategoriesModule);


},
29(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CategoriesService: () => (CategoriesService)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _prisma_prisma_service_js__rspack_import_1 = __webpack_require__(18);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}


class CategoriesService {
    async findAll(page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [categories, count] = await Promise.all([
            this.prisma.category.findMany({
                orderBy: {
                    name: 'asc'
                },
                skip,
                take: limit
            }),
            this.prisma.category.count()
        ]);
        return {
            data: categories,
            count,
            total: categories.length,
            page,
            page_count: Math.ceil(count / limit)
        };
    }
    async create(name) {
        const slug = name.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        return this.prisma.category.create({
            data: {
                name: name.trim(),
                slug
            }
        });
    }
    async update(id, body) {
        const slug = body.name?.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        return this.prisma.category.update({
            where: {
                id
            },
            data: {
                ...body,
                slug
            }
        });
    }
    async remove(id) {
        const category = await this.prisma.category.findUnique({
            where: {
                id
            },
            include: {
                _count: {
                    select: {
                        products: true
                    }
                }
            }
        });
        if (!category) {
            throw new _nestjs_common__rspack_import_0.NotFoundException('Category not found');
        }
        if (category._count.products > 0) {
            throw new _nestjs_common__rspack_import_0.ConflictException('Category has products. Move or remove them before deleting it');
        }
        await this.prisma.category.delete({
            where: {
                id
            }
        });
        return {
            id
        };
    }
    constructor(prisma){
        _define_property(this, "prisma", void 0);
        this.prisma = prisma;
    }
}
CategoriesService = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prisma_prisma_service_js__rspack_import_1.PrismaService === "undefined" ? Object : _prisma_prisma_service_js__rspack_import_1.PrismaService
    ])
], CategoriesService);


},
35(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CreateCategoryDto: () => (CreateCategoryDto)
});
/* import */ var class_validator__rspack_import_0 = __webpack_require__(36);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}

class CreateCategoryDto {
    constructor(){
        _define_property(this, "name", void 0);
    }
}
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.IsNotEmpty)(),
    _ts_metadata("design:type", String)
], CreateCategoryDto.prototype, "name", void 0);


},
33(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UpdateCategoryDto: () => (UpdateCategoryDto)
});
/* import */ var _nestjs_mapped_types__rspack_import_0 = __webpack_require__(34);
/* import */ var _create_category_dto_js__rspack_import_1 = __webpack_require__(35);


class UpdateCategoryDto extends (0,_nestjs_mapped_types__rspack_import_0.PartialType)(_create_category_dto_js__rspack_import_1.CreateCategoryDto) {
}


},
20(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  $Enums: () => (/* reexport module object */ _enums_js__rspack_import_4),
  OrderStatus: () => (/* reexport safe */ _enums_js__rspack_import_4.OrderStatus),
  PaymentProvider: () => (/* reexport safe */ _enums_js__rspack_import_4.PaymentProvider),
  PaymentStatus: () => (/* reexport safe */ _enums_js__rspack_import_4.PaymentStatus),
  Prisma: () => (/* reexport module object */ _internal_prismaNamespace_js__rspack_import_3),
  PrismaClient: () => (PrismaClient),
  UserRole: () => (/* reexport safe */ _enums_js__rspack_import_4.UserRole)
});
/* import */ var node_path__rspack_import_0 = __webpack_require__(21);
/* import */ var node_url__rspack_import_1 = __webpack_require__(22);
/* import */ var _internal_class_js__rspack_import_2 = __webpack_require__(23);
/* import */ var _internal_prismaNamespace_js__rspack_import_3 = __webpack_require__(25);
/* import */ var _enums_js__rspack_import_4 = __webpack_require__(26);
/* !!! This is code generated by Prisma. Do not edit directly. !!! */ /* eslint-disable */ // biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * This file should be your main import to use Prisma. Through it you get access to all the models, enums, and input types.
 * If you're looking for something you can import in the client-side of your application, please refer to the `browser.ts` file instead.
 *
 * 🟢 You can import this file directly.
 */ 

globalThis['__dirname'] = node_path__rspack_import_0.dirname((0,node_url__rspack_import_1.fileURLToPath)('file:///C:/Users/MUHAMED%20SUFI/Demo%20projects/backend/auto-parts/backend/src/generated/prisma/client.ts'));




/**
 * ## Prisma Client
 * 
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
 * ```
 * 
 * Read more in our [docs](https://pris.ly/d/client).
 */ const PrismaClient = _internal_class_js__rspack_import_2.getPrismaClientClass();



},
26(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  OrderStatus: () => (OrderStatus),
  PaymentProvider: () => (PaymentProvider),
  PaymentStatus: () => (PaymentStatus),
  UserRole: () => (UserRole)
});
/* !!! This is code generated by Prisma. Do not edit directly. !!! */ /* eslint-disable */ // biome-ignore-all lint: generated file
// @ts-nocheck 
/*
* This file exports all enum related types from the schema.
*
* 🟢 You can import this file directly.
*/ const OrderStatus = {
    PENDING: 'PENDING',
    CONFIRMED: 'CONFIRMED',
    PROCESSING: 'PROCESSING',
    SHIPPED: 'SHIPPED',
    DELIVERED: 'DELIVERED',
    CANCELLED: 'CANCELLED'
};
const PaymentProvider = {
    RAZORPAY: 'RAZORPAY',
    STRIPE: 'STRIPE'
};
const PaymentStatus = {
    PENDING: 'PENDING',
    AUTHORIZED: 'AUTHORIZED',
    CAPTURED: 'CAPTURED',
    FAILED: 'FAILED',
    CANCELLED: 'CANCELLED',
    REFUNDED: 'REFUNDED',
    PARTIALLY_REFUNDED: 'PARTIALLY_REFUNDED'
};
const UserRole = {
    CUSTOMER: 'CUSTOMER',
    ADMIN: 'ADMIN'
};


},
23(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getPrismaClientClass: () => (getPrismaClientClass)
});
/* import */ var _prisma_client_runtime_client__rspack_import_0 = __webpack_require__(24);
/* !!! This is code generated by Prisma. Do not edit directly. !!! */ /* eslint-disable */ // biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * WARNING: This is an internal file that is subject to change!
 *
 * 🛑 Under no circumstances should you import this file directly! 🛑
 *
 * Please import the `PrismaClient` class from the `client.ts` file instead.
 */ 
const config = {
    "previewFeatures": [],
    "clientVersion": "7.10.1",
    "engineVersion": "d1b3f377ca835d73fd50954a5e22128b9ebdd6b8",
    "activeProvider": "postgresql",
    "inlineSchema": "generator client {\n  provider = \"prisma-client\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nenum OrderStatus {\n  PENDING\n  CONFIRMED\n  PROCESSING\n  SHIPPED\n  DELIVERED\n  CANCELLED\n}\n\nenum PaymentProvider {\n  RAZORPAY\n  STRIPE\n}\n\nenum PaymentStatus {\n  PENDING\n  AUTHORIZED\n  CAPTURED\n  FAILED\n  CANCELLED\n  REFUNDED\n  PARTIALLY_REFUNDED\n}\n\nmodel Category {\n  id        String    @id @default(uuid()) @db.Uuid\n  name      String    @unique\n  slug      String    @unique\n  products  Product[]\n  createdAt DateTime  @default(now())\n  updatedAt DateTime  @updatedAt\n}\n\nmodel Product {\n  id          String      @id @default(uuid()) @db.Uuid\n  sku         String      @unique\n  name        String\n  slug        String      @unique\n  description String?\n  price       Decimal     @db.Decimal(10, 2)\n  stock       Int         @default(0)\n  brand       String?\n  imageUrl    String?\n  isActive    Boolean     @default(true)\n  cartItems   CartItem[]\n  orderItems  OrderItem[]\n\n  categoryId String   @db.Uuid\n  category   Category @relation(fields: [categoryId], references: [id])\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([categoryId])\n  @@index([name])\n}\n\nenum UserRole {\n  CUSTOMER\n  ADMIN\n}\n\nmodel User {\n  id String @id @default(uuid()) @db.Uuid\n\n  firstName String\n  lastName  String\n\n  email    String @unique\n  password String\n\n  phone String? @unique\n\n  role UserRole @default(CUSTOMER)\n\n  isActive               Boolean   @default(true)\n  cart                   Cart?\n  orders                 Order[]\n  passwordResetTokenHash String?   @unique\n  passwordResetExpiresAt DateTime?\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([role])\n  @@index([isActive])\n  @@map(\"users\")\n}\n\nmodel Cart {\n  id     String @id @default(uuid()) @db.Uuid\n  userId String @unique @db.Uuid\n\n  user  User       @relation(fields: [userId], references: [id], onDelete: Cascade)\n  items CartItem[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map(\"carts\")\n}\n\nmodel CartItem {\n  id        String @id @default(uuid()) @db.Uuid\n  cartId    String @db.Uuid\n  productId String @db.Uuid\n  quantity  Int    @default(1)\n\n  cart    Cart    @relation(fields: [cartId], references: [id], onDelete: Cascade)\n  product Product @relation(fields: [productId], references: [id], onDelete: Restrict)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@unique([cartId, productId])\n  @@index([cartId])\n  @@index([productId])\n  @@map(\"cart_items\")\n}\n\nmodel Order {\n  id          String @id @default(uuid()) @db.Uuid\n  orderNumber String @unique\n\n  userId String @db.Uuid\n  user   User   @relation(fields: [userId], references: [id], onDelete: Restrict)\n\n  status OrderStatus @default(PENDING)\n\n  subtotal    Decimal @db.Decimal(10, 2)\n  shippingFee Decimal @default(0) @db.Decimal(10, 2)\n  tax         Decimal @default(0) @db.Decimal(10, 2)\n  total       Decimal @db.Decimal(10, 2)\n\n  items    OrderItem[]\n  payments Payment[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([userId])\n  @@index([status])\n  @@index([createdAt])\n  @@map(\"orders\")\n}\n\nmodel OrderItem {\n  id String @id @default(uuid()) @db.Uuid\n\n  orderId String @db.Uuid\n  order   Order  @relation(fields: [orderId], references: [id], onDelete: Cascade)\n\n  productId String  @db.Uuid\n  product   Product @relation(fields: [productId], references: [id], onDelete: Restrict)\n\n  productName String\n  sku         String\n  price       Decimal @db.Decimal(10, 2)\n  quantity    Int\n  lineTotal   Decimal @db.Decimal(10, 2)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([orderId])\n  @@index([productId])\n  @@map(\"order_items\")\n}\n\nmodel Payment {\n  id String @id @default(uuid()) @db.Uuid\n\n  orderId String @db.Uuid\n  order   Order  @relation(fields: [orderId], references: [id], onDelete: Restrict)\n\n  provider PaymentProvider\n  status   PaymentStatus   @default(PENDING)\n\n  amount   Decimal @db.Decimal(10, 2)\n  currency String  @default(\"INR\")\n\n  providerOrderId   String? @unique\n  providerPaymentId String? @unique\n\n  paymentMethod String?\n  failureReason String?\n\n  paidAt    DateTime?\n  createdAt DateTime  @default(now())\n  updatedAt DateTime  @updatedAt\n\n  @@index([orderId])\n  @@index([status])\n  @@index([provider])\n  @@map(\"payments\")\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"Category\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"products\",\"kind\":\"object\",\"type\":\"Product\",\"relationName\":\"CategoryToProduct\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null,\"schema\":null},\"Product\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"sku\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"stock\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"brand\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"imageUrl\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"isActive\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"cartItems\",\"kind\":\"object\",\"type\":\"CartItem\",\"relationName\":\"CartItemToProduct\"},{\"name\":\"orderItems\",\"kind\":\"object\",\"type\":\"OrderItem\",\"relationName\":\"OrderItemToProduct\"},{\"name\":\"categoryId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"category\",\"kind\":\"object\",\"type\":\"Category\",\"relationName\":\"CategoryToProduct\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null,\"schema\":null},\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"firstName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"phone\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"enum\",\"type\":\"UserRole\"},{\"name\":\"isActive\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"cart\",\"kind\":\"object\",\"type\":\"Cart\",\"relationName\":\"CartToUser\"},{\"name\":\"orders\",\"kind\":\"object\",\"type\":\"Order\",\"relationName\":\"OrderToUser\"},{\"name\":\"passwordResetTokenHash\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"passwordResetExpiresAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"users\",\"schema\":null},\"Cart\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"CartToUser\"},{\"name\":\"items\",\"kind\":\"object\",\"type\":\"CartItem\",\"relationName\":\"CartToCartItem\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"carts\",\"schema\":null},\"CartItem\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"cartId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"productId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"quantity\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"cart\",\"kind\":\"object\",\"type\":\"Cart\",\"relationName\":\"CartToCartItem\"},{\"name\":\"product\",\"kind\":\"object\",\"type\":\"Product\",\"relationName\":\"CartItemToProduct\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"cart_items\",\"schema\":null},\"Order\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"orderNumber\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"OrderToUser\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"OrderStatus\"},{\"name\":\"subtotal\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"shippingFee\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"tax\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"total\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"items\",\"kind\":\"object\",\"type\":\"OrderItem\",\"relationName\":\"OrderToOrderItem\"},{\"name\":\"payments\",\"kind\":\"object\",\"type\":\"Payment\",\"relationName\":\"OrderToPayment\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"orders\",\"schema\":null},\"OrderItem\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"orderId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"order\",\"kind\":\"object\",\"type\":\"Order\",\"relationName\":\"OrderToOrderItem\"},{\"name\":\"productId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"product\",\"kind\":\"object\",\"type\":\"Product\",\"relationName\":\"OrderItemToProduct\"},{\"name\":\"productName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"sku\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"quantity\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"lineTotal\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"order_items\",\"schema\":null},\"Payment\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"orderId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"order\",\"kind\":\"object\",\"type\":\"Order\",\"relationName\":\"OrderToPayment\"},{\"name\":\"provider\",\"kind\":\"enum\",\"type\":\"PaymentProvider\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"PaymentStatus\"},{\"name\":\"amount\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"currency\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"providerOrderId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"providerPaymentId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"paymentMethod\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"failureReason\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"paidAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"payments\",\"schema\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"orderBy\",\"cursor\",\"cart\",\"user\",\"order\",\"product\",\"items\",\"payments\",\"_count\",\"orders\",\"cartItems\",\"orderItems\",\"category\",\"products\",\"Category.findUnique\",\"Category.findUniqueOrThrow\",\"Category.findFirst\",\"Category.findFirstOrThrow\",\"Category.findMany\",\"data\",\"Category.createOne\",\"Category.createMany\",\"Category.createManyAndReturn\",\"Category.updateOne\",\"Category.updateMany\",\"Category.updateManyAndReturn\",\"create\",\"update\",\"Category.upsertOne\",\"Category.deleteOne\",\"Category.deleteMany\",\"having\",\"_min\",\"_max\",\"Category.groupBy\",\"Category.aggregate\",\"Product.findUnique\",\"Product.findUniqueOrThrow\",\"Product.findFirst\",\"Product.findFirstOrThrow\",\"Product.findMany\",\"Product.createOne\",\"Product.createMany\",\"Product.createManyAndReturn\",\"Product.updateOne\",\"Product.updateMany\",\"Product.updateManyAndReturn\",\"Product.upsertOne\",\"Product.deleteOne\",\"Product.deleteMany\",\"_avg\",\"_sum\",\"Product.groupBy\",\"Product.aggregate\",\"User.findUnique\",\"User.findUniqueOrThrow\",\"User.findFirst\",\"User.findFirstOrThrow\",\"User.findMany\",\"User.createOne\",\"User.createMany\",\"User.createManyAndReturn\",\"User.updateOne\",\"User.updateMany\",\"User.updateManyAndReturn\",\"User.upsertOne\",\"User.deleteOne\",\"User.deleteMany\",\"User.groupBy\",\"User.aggregate\",\"Cart.findUnique\",\"Cart.findUniqueOrThrow\",\"Cart.findFirst\",\"Cart.findFirstOrThrow\",\"Cart.findMany\",\"Cart.createOne\",\"Cart.createMany\",\"Cart.createManyAndReturn\",\"Cart.updateOne\",\"Cart.updateMany\",\"Cart.updateManyAndReturn\",\"Cart.upsertOne\",\"Cart.deleteOne\",\"Cart.deleteMany\",\"Cart.groupBy\",\"Cart.aggregate\",\"CartItem.findUnique\",\"CartItem.findUniqueOrThrow\",\"CartItem.findFirst\",\"CartItem.findFirstOrThrow\",\"CartItem.findMany\",\"CartItem.createOne\",\"CartItem.createMany\",\"CartItem.createManyAndReturn\",\"CartItem.updateOne\",\"CartItem.updateMany\",\"CartItem.updateManyAndReturn\",\"CartItem.upsertOne\",\"CartItem.deleteOne\",\"CartItem.deleteMany\",\"CartItem.groupBy\",\"CartItem.aggregate\",\"Order.findUnique\",\"Order.findUniqueOrThrow\",\"Order.findFirst\",\"Order.findFirstOrThrow\",\"Order.findMany\",\"Order.createOne\",\"Order.createMany\",\"Order.createManyAndReturn\",\"Order.updateOne\",\"Order.updateMany\",\"Order.updateManyAndReturn\",\"Order.upsertOne\",\"Order.deleteOne\",\"Order.deleteMany\",\"Order.groupBy\",\"Order.aggregate\",\"OrderItem.findUnique\",\"OrderItem.findUniqueOrThrow\",\"OrderItem.findFirst\",\"OrderItem.findFirstOrThrow\",\"OrderItem.findMany\",\"OrderItem.createOne\",\"OrderItem.createMany\",\"OrderItem.createManyAndReturn\",\"OrderItem.updateOne\",\"OrderItem.updateMany\",\"OrderItem.updateManyAndReturn\",\"OrderItem.upsertOne\",\"OrderItem.deleteOne\",\"OrderItem.deleteMany\",\"OrderItem.groupBy\",\"OrderItem.aggregate\",\"Payment.findUnique\",\"Payment.findUniqueOrThrow\",\"Payment.findFirst\",\"Payment.findFirstOrThrow\",\"Payment.findMany\",\"Payment.createOne\",\"Payment.createMany\",\"Payment.createManyAndReturn\",\"Payment.updateOne\",\"Payment.updateMany\",\"Payment.updateManyAndReturn\",\"Payment.upsertOne\",\"Payment.deleteOne\",\"Payment.deleteMany\",\"Payment.groupBy\",\"Payment.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"orderId\",\"PaymentProvider\",\"provider\",\"PaymentStatus\",\"status\",\"amount\",\"currency\",\"providerOrderId\",\"providerPaymentId\",\"paymentMethod\",\"failureReason\",\"paidAt\",\"createdAt\",\"updatedAt\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"productId\",\"productName\",\"sku\",\"price\",\"quantity\",\"lineTotal\",\"orderNumber\",\"userId\",\"OrderStatus\",\"subtotal\",\"shippingFee\",\"tax\",\"total\",\"cartId\",\"every\",\"some\",\"none\",\"firstName\",\"lastName\",\"email\",\"password\",\"phone\",\"UserRole\",\"role\",\"isActive\",\"passwordResetTokenHash\",\"passwordResetExpiresAt\",\"name\",\"slug\",\"description\",\"stock\",\"brand\",\"imageUrl\",\"categoryId\",\"cartId_productId\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"createMany\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "_wNQgAEJDgAAlAIAIJcBAACTAgAwmAEAACMAEJkBAACTAgAwmgEBAAAAAacBQAD9AQAhqAFAAP0BACHPAQEAAAAB0AEBAAAAAQEAAAABACATCwAA_wEAIAwAAJ8CACANAAClAgAglwEAAKQCADCYAQAAAwAQmQEAAKQCADCaAQEAiAIAIacBQAD9AQAhqAFAAP0BACG2AQEAiQIAIbcBEACYAgAhzAEgAIwCACHPAQEAiQIAIdABAQCJAgAh0QEBAIoCACHSAQIAmwIAIdMBAQCKAgAh1AEBAIoCACHVAQEAiAIAIQYLAACAAwAgDAAAzgMAIA0AANADACDRAQAApgIAINMBAACmAgAg1AEAAKYCACATCwAA_wEAIAwAAJ8CACANAAClAgAglwEAAKQCADCYAQAAAwAQmQEAAKQCADCaAQEAAAABpwFAAP0BACGoAUAA_QEAIbYBAQAAAAG3ARAAmAIAIcwBIACMAgAhzwEBAIkCACHQAQEAAAAB0QEBAIoCACHSAQIAmwIAIdMBAQCKAgAh1AEBAIoCACHVAQEAiAIAIQMAAAADACABAAAEADACAAAFACALAwAAowIAIAYAAJwCACCXAQAAogIAMJgBAAAHABCZAQAAogIAMJoBAQCIAgAhpwFAAP0BACGoAUAA_QEAIbQBAQCIAgAhuAECAJsCACHBAQEAiAIAIQIDAACbAwAgBgAAzQMAIAwDAACjAgAgBgAAnAIAIJcBAACiAgAwmAEAAAcAEJkBAACiAgAwmgEBAAAAAacBQAD9AQAhqAFAAP0BACG0AQEAiAIAIbgBAgCbAgAhwQEBAIgCACHWAQAAoQIAIAMAAAAHACABAAAIADACAAAJACAJBAAA_gEAIAcAAP8BACCXAQAA_AEAMJgBAAALABCZAQAA_AEAMJoBAQCIAgAhpwFAAP0BACGoAUAA_QEAIbsBAQCIAgAhAQAAAAsAIBAEAAD-AQAgBwAAnwIAIAgAAKACACCXAQAAnQIAMJgBAAANABCZAQAAnQIAMJoBAQCIAgAhnwEAAJ4CvQEipwFAAP0BACGoAUAA_QEAIboBAQCJAgAhuwEBAIgCACG9ARAAmAIAIb4BEACYAgAhvwEQAJgCACHAARAAmAIAIQMEAAD_AgAgBwAAzgMAIAgAAM8DACAQBAAA_gEAIAcAAJ8CACAIAACgAgAglwEAAJ0CADCYAQAADQAQmQEAAJ0CADCaAQEAAAABnwEAAJ4CvQEipwFAAP0BACGoAUAA_QEAIboBAQAAAAG7AQEAiAIAIb0BEACYAgAhvgEQAJgCACG_ARAAmAIAIcABEACYAgAhAwAAAA0AIAEAAA4AMAIAAA8AIA8FAACZAgAgBgAAnAIAIJcBAACaAgAwmAEAABEAEJkBAACaAgAwmgEBAIgCACGbAQEAiAIAIacBQAD9AQAhqAFAAP0BACG0AQEAiAIAIbUBAQCJAgAhtgEBAIkCACG3ARAAmAIAIbgBAgCbAgAhuQEQAJgCACECBQAAzAMAIAYAAM0DACAPBQAAmQIAIAYAAJwCACCXAQAAmgIAMJgBAAARABCZAQAAmgIAMJoBAQAAAAGbAQEAiAIAIacBQAD9AQAhqAFAAP0BACG0AQEAiAIAIbUBAQCJAgAhtgEBAIkCACG3ARAAmAIAIbgBAgCbAgAhuQEQAJgCACEDAAAAEQAgAQAAEgAwAgAAEwAgEQUAAJkCACCXAQAAlQIAMJgBAAAVABCZAQAAlQIAMJoBAQCIAgAhmwEBAIgCACGdAQAAlgKdASKfAQAAlwKfASKgARAAmAIAIaEBAQCJAgAhogEBAIoCACGjAQEAigIAIaQBAQCKAgAhpQEBAIoCACGmAUAAjQIAIacBQAD9AQAhqAFAAP0BACEGBQAAzAMAIKIBAACmAgAgowEAAKYCACCkAQAApgIAIKUBAACmAgAgpgEAAKYCACARBQAAmQIAIJcBAACVAgAwmAEAABUAEJkBAACVAgAwmgEBAAAAAZsBAQCIAgAhnQEAAJYCnQEinwEAAJcCnwEioAEQAJgCACGhAQEAiQIAIaIBAQAAAAGjAQEAAAABpAEBAIoCACGlAQEAigIAIaYBQACNAgAhpwFAAP0BACGoAUAA_QEAIQMAAAAVACABAAAWADACAAAXACABAAAAEQAgAQAAABUAIAEAAAANACADAAAABwAgAQAACAAwAgAACQAgAQAAAAcAIAMAAAARACABAAASADACAAATACABAAAABwAgAQAAABEAIAEAAAADACABAAAAAQAgCQ4AAJQCACCXAQAAkwIAMJgBAAAjABCZAQAAkwIAMJoBAQCIAgAhpwFAAP0BACGoAUAA_QEAIc8BAQCJAgAh0AEBAIkCACEBDgAAywMAIAMAAAAjACABAAAkADACAAABACADAAAAIwAgAQAAJAAwAgAAAQAgAwAAACMAIAEAACQAMAIAAAEAIAYOAADKAwAgmgEBAAAAAacBQAAAAAGoAUAAAAABzwEBAAAAAdABAQAAAAEBFAAAKAAgBZoBAQAAAAGnAUAAAAABqAFAAAAAAc8BAQAAAAHQAQEAAAABARQAACoAMAEUAAAqADAGDgAAvQMAIJoBAQCsAgAhpwFAALICACGoAUAAsgIAIc8BAQCsAgAh0AEBAKwCACECAAAAAQAgFAAALQAgBZoBAQCsAgAhpwFAALICACGoAUAAsgIAIc8BAQCsAgAh0AEBAKwCACECAAAAIwAgFAAALwAgAgAAACMAIBQAAC8AIAMAAAABACAbAAAoACAcAAAtACABAAAAAQAgAQAAACMAIAMJAAC6AwAgIQAAvAMAICIAALsDACAIlwEAAJICADCYAQAANgAQmQEAAJICADCaAQEA2QEAIacBQADgAQAhqAFAAOABACHPAQEA3QEAIdABAQDdAQAhAwAAACMAIAEAADUAMCAAADYAIAMAAAAjACABAAAkADACAAABACABAAAABQAgAQAAAAUAIAMAAAADACABAAAEADACAAAFACADAAAAAwAgAQAABAAwAgAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIBALAAC3AwAgDAAAuAMAIA0AALkDACCaAQEAAAABpwFAAAAAAagBQAAAAAG2AQEAAAABtwEQAAAAAcwBIAAAAAHPAQEAAAAB0AEBAAAAAdEBAQAAAAHSAQIAAAAB0wEBAAAAAdQBAQAAAAHVAQEAAAABARQAAD4AIA2aAQEAAAABpwFAAAAAAagBQAAAAAG2AQEAAAABtwEQAAAAAcwBIAAAAAHPAQEAAAAB0AEBAAAAAdEBAQAAAAHSAQIAAAAB0wEBAAAAAdQBAQAAAAHVAQEAAAABARQAAEAAMAEUAABAADAQCwAAogMAIAwAAKMDACANAACkAwAgmgEBAKwCACGnAUAAsgIAIagBQACyAgAhtgEBAKwCACG3ARAArwIAIcwBIACFAwAhzwEBAKwCACHQAQEArAIAIdEBAQCwAgAh0gECALoCACHTAQEAsAIAIdQBAQCwAgAh1QEBAKwCACECAAAABQAgFAAAQwAgDZoBAQCsAgAhpwFAALICACGoAUAAsgIAIbYBAQCsAgAhtwEQAK8CACHMASAAhQMAIc8BAQCsAgAh0AEBAKwCACHRAQEAsAIAIdIBAgC6AgAh0wEBALACACHUAQEAsAIAIdUBAQCsAgAhAgAAAAMAIBQAAEUAIAIAAAADACAUAABFACADAAAABQAgGwAAPgAgHAAAQwAgAQAAAAUAIAEAAAADACAICQAAnQMAICEAAKADACAiAACfAwAgMwAAngMAIDQAAKEDACDRAQAApgIAINMBAACmAgAg1AEAAKYCACAQlwEAAJECADCYAQAATAAQmQEAAJECADCaAQEA2QEAIacBQADgAQAhqAFAAOABACG2AQEA3QEAIbcBEADcAQAhzAEgAIICACHPAQEA3QEAIdABAQDdAQAh0QEBAN4BACHSAQIA8wEAIdMBAQDeAQAh1AEBAN4BACHVAQEA2QEAIQMAAAADACABAABLADAgAABMACADAAAAAwAgAQAABAAwAgAABQAgEQMAAI4CACAKAACPAgAglwEAAIcCADCYAQAAUgAQmQEAAIcCADCaAQEAAAABpwFAAP0BACGoAUAA_QEAIcUBAQCJAgAhxgEBAIkCACHHAQEAAAAByAEBAIkCACHJAQEAAAABywEAAIsCywEizAEgAIwCACHNAQEAAAABzgFAAI0CACEBAAAATwAgAQAAAE8AIBEDAACOAgAgCgAAjwIAIJcBAACHAgAwmAEAAFIAEJkBAACHAgAwmgEBAIgCACGnAUAA_QEAIagBQAD9AQAhxQEBAIkCACHGAQEAiQIAIccBAQCJAgAhyAEBAIkCACHJAQEAigIAIcsBAACLAssBIswBIACMAgAhzQEBAIoCACHOAUAAjQIAIQUDAACbAwAgCgAAnAMAIMkBAACmAgAgzQEAAKYCACDOAQAApgIAIAMAAABSACABAABTADACAABPACADAAAAUgAgAQAAUwAwAgAATwAgAwAAAFIAIAEAAFMAMAIAAE8AIA4DAACZAwAgCgAAmgMAIJoBAQAAAAGnAUAAAAABqAFAAAAAAcUBAQAAAAHGAQEAAAABxwEBAAAAAcgBAQAAAAHJAQEAAAABywEAAADLAQLMASAAAAABzQEBAAAAAc4BQAAAAAEBFAAAVwAgDJoBAQAAAAGnAUAAAAABqAFAAAAAAcUBAQAAAAHGAQEAAAABxwEBAAAAAcgBAQAAAAHJAQEAAAABywEAAADLAQLMASAAAAABzQEBAAAAAc4BQAAAAAEBFAAAWQAwARQAAFkAMA4DAACGAwAgCgAAhwMAIJoBAQCsAgAhpwFAALICACGoAUAAsgIAIcUBAQCsAgAhxgEBAKwCACHHAQEArAIAIcgBAQCsAgAhyQEBALACACHLAQAAhAPLASLMASAAhQMAIc0BAQCwAgAhzgFAALECACECAAAATwAgFAAAXAAgDJoBAQCsAgAhpwFAALICACGoAUAAsgIAIcUBAQCsAgAhxgEBAKwCACHHAQEArAIAIcgBAQCsAgAhyQEBALACACHLAQAAhAPLASLMASAAhQMAIc0BAQCwAgAhzgFAALECACECAAAAUgAgFAAAXgAgAgAAAFIAIBQAAF4AIAMAAABPACAbAABXACAcAABcACABAAAATwAgAQAAAFIAIAYJAACBAwAgIQAAgwMAICIAAIIDACDJAQAApgIAIM0BAACmAgAgzgEAAKYCACAPlwEAAIACADCYAQAAZQAQmQEAAIACADCaAQEA2QEAIacBQADgAQAhqAFAAOABACHFAQEA3QEAIcYBAQDdAQAhxwEBAN0BACHIAQEA3QEAIckBAQDeAQAhywEAAIECywEizAEgAIICACHNAQEA3gEAIc4BQADfAQAhAwAAAFIAIAEAAGQAMCAAAGUAIAMAAABSACABAABTADACAABPACAJBAAA_gEAIAcAAP8BACCXAQAA_AEAMJgBAAALABCZAQAA_AEAMJoBAQAAAAGnAUAA_QEAIagBQAD9AQAhuwEBAAAAAQEAAABoACABAAAAaAAgAgQAAP8CACAHAACAAwAgAwAAAAsAIAEAAGsAMAIAAGgAIAMAAAALACABAABrADACAABoACADAAAACwAgAQAAawAwAgAAaAAgBgQAAP0CACAHAAD-AgAgmgEBAAAAAacBQAAAAAGoAUAAAAABuwEBAAAAAQEUAABvACAEmgEBAAAAAacBQAAAAAGoAUAAAAABuwEBAAAAAQEUAABxADABFAAAcQAwBgQAAO8CACAHAADwAgAgmgEBAKwCACGnAUAAsgIAIagBQACyAgAhuwEBAKwCACECAAAAaAAgFAAAdAAgBJoBAQCsAgAhpwFAALICACGoAUAAsgIAIbsBAQCsAgAhAgAAAAsAIBQAAHYAIAIAAAALACAUAAB2ACADAAAAaAAgGwAAbwAgHAAAdAAgAQAAAGgAIAEAAAALACADCQAA7AIAICEAAO4CACAiAADtAgAgB5cBAAD7AQAwmAEAAH0AEJkBAAD7AQAwmgEBANkBACGnAUAA4AEAIagBQADgAQAhuwEBANkBACEDAAAACwAgAQAAfAAwIAAAfQAgAwAAAAsAIAEAAGsAMAIAAGgAIAEAAAAJACABAAAACQAgAwAAAAcAIAEAAAgAMAIAAAkAIAMAAAAHACABAAAIADACAAAJACADAAAABwAgAQAACAAwAgAACQAgCAMAAOoCACAGAADrAgAgmgEBAAAAAacBQAAAAAGoAUAAAAABtAEBAAAAAbgBAgAAAAHBAQEAAAABARQAAIUBACAGmgEBAAAAAacBQAAAAAGoAUAAAAABtAEBAAAAAbgBAgAAAAHBAQEAAAABARQAAIcBADABFAAAhwEAMAgDAADoAgAgBgAA6QIAIJoBAQCsAgAhpwFAALICACGoAUAAsgIAIbQBAQCsAgAhuAECALoCACHBAQEArAIAIQIAAAAJACAUAACKAQAgBpoBAQCsAgAhpwFAALICACGoAUAAsgIAIbQBAQCsAgAhuAECALoCACHBAQEArAIAIQIAAAAHACAUAACMAQAgAgAAAAcAIBQAAIwBACADAAAACQAgGwAAhQEAIBwAAIoBACABAAAACQAgAQAAAAcAIAUJAADjAgAgIQAA5gIAICIAAOUCACAzAADkAgAgNAAA5wIAIAmXAQAA-gEAMJgBAACTAQAQmQEAAPoBADCaAQEA2QEAIacBQADgAQAhqAFAAOABACG0AQEA2QEAIbgBAgDzAQAhwQEBANkBACEDAAAABwAgAQAAkgEAMCAAAJMBACADAAAABwAgAQAACAAwAgAACQAgAQAAAA8AIAEAAAAPACADAAAADQAgAQAADgAwAgAADwAgAwAAAA0AIAEAAA4AMAIAAA8AIAMAAAANACABAAAOADACAAAPACANBAAA4AIAIAcAAOECACAIAADiAgAgmgEBAAAAAZ8BAAAAvQECpwFAAAAAAagBQAAAAAG6AQEAAAABuwEBAAAAAb0BEAAAAAG-ARAAAAABvwEQAAAAAcABEAAAAAEBFAAAmwEAIAqaAQEAAAABnwEAAAC9AQKnAUAAAAABqAFAAAAAAboBAQAAAAG7AQEAAAABvQEQAAAAAb4BEAAAAAG_ARAAAAABwAEQAAAAAQEUAACdAQAwARQAAJ0BADANBAAAxQIAIAcAAMYCACAIAADHAgAgmgEBAKwCACGfAQAAxAK9ASKnAUAAsgIAIagBQACyAgAhugEBAKwCACG7AQEArAIAIb0BEACvAgAhvgEQAK8CACG_ARAArwIAIcABEACvAgAhAgAAAA8AIBQAAKABACAKmgEBAKwCACGfAQAAxAK9ASKnAUAAsgIAIagBQACyAgAhugEBAKwCACG7AQEArAIAIb0BEACvAgAhvgEQAK8CACG_ARAArwIAIcABEACvAgAhAgAAAA0AIBQAAKIBACACAAAADQAgFAAAogEAIAMAAAAPACAbAACbAQAgHAAAoAEAIAEAAAAPACABAAAADQAgBQkAAL8CACAhAADCAgAgIgAAwQIAIDMAAMACACA0AADDAgAgDZcBAAD2AQAwmAEAAKkBABCZAQAA9gEAMJoBAQDZAQAhnwEAAPcBvQEipwFAAOABACGoAUAA4AEAIboBAQDdAQAhuwEBANkBACG9ARAA3AEAIb4BEADcAQAhvwEQANwBACHAARAA3AEAIQMAAAANACABAACoAQAwIAAAqQEAIAMAAAANACABAAAOADACAAAPACABAAAAEwAgAQAAABMAIAMAAAARACABAAASADACAAATACADAAAAEQAgAQAAEgAwAgAAEwAgAwAAABEAIAEAABIAMAIAABMAIAwFAAC9AgAgBgAAvgIAIJoBAQAAAAGbAQEAAAABpwFAAAAAAagBQAAAAAG0AQEAAAABtQEBAAAAAbYBAQAAAAG3ARAAAAABuAECAAAAAbkBEAAAAAEBFAAAsQEAIAqaAQEAAAABmwEBAAAAAacBQAAAAAGoAUAAAAABtAEBAAAAAbUBAQAAAAG2AQEAAAABtwEQAAAAAbgBAgAAAAG5ARAAAAABARQAALMBADABFAAAswEAMAwFAAC7AgAgBgAAvAIAIJoBAQCsAgAhmwEBAKwCACGnAUAAsgIAIagBQACyAgAhtAEBAKwCACG1AQEArAIAIbYBAQCsAgAhtwEQAK8CACG4AQIAugIAIbkBEACvAgAhAgAAABMAIBQAALYBACAKmgEBAKwCACGbAQEArAIAIacBQACyAgAhqAFAALICACG0AQEArAIAIbUBAQCsAgAhtgEBAKwCACG3ARAArwIAIbgBAgC6AgAhuQEQAK8CACECAAAAEQAgFAAAuAEAIAIAAAARACAUAAC4AQAgAwAAABMAIBsAALEBACAcAAC2AQAgAQAAABMAIAEAAAARACAFCQAAtQIAICEAALgCACAiAAC3AgAgMwAAtgIAIDQAALkCACANlwEAAPIBADCYAQAAvwEAEJkBAADyAQAwmgEBANkBACGbAQEA2QEAIacBQADgAQAhqAFAAOABACG0AQEA2QEAIbUBAQDdAQAhtgEBAN0BACG3ARAA3AEAIbgBAgDzAQAhuQEQANwBACEDAAAAEQAgAQAAvgEAMCAAAL8BACADAAAAEQAgAQAAEgAwAgAAEwAgAQAAABcAIAEAAAAXACADAAAAFQAgAQAAFgAwAgAAFwAgAwAAABUAIAEAABYAMAIAABcAIAMAAAAVACABAAAWADACAAAXACAOBQAAtAIAIJoBAQAAAAGbAQEAAAABnQEAAACdAQKfAQAAAJ8BAqABEAAAAAGhAQEAAAABogEBAAAAAaMBAQAAAAGkAQEAAAABpQEBAAAAAaYBQAAAAAGnAUAAAAABqAFAAAAAAQEUAADHAQAgDZoBAQAAAAGbAQEAAAABnQEAAACdAQKfAQAAAJ8BAqABEAAAAAGhAQEAAAABogEBAAAAAaMBAQAAAAGkAQEAAAABpQEBAAAAAaYBQAAAAAGnAUAAAAABqAFAAAAAAQEUAADJAQAwARQAAMkBADAOBQAAswIAIJoBAQCsAgAhmwEBAKwCACGdAQAArQKdASKfAQAArgKfASKgARAArwIAIaEBAQCsAgAhogEBALACACGjAQEAsAIAIaQBAQCwAgAhpQEBALACACGmAUAAsQIAIacBQACyAgAhqAFAALICACECAAAAFwAgFAAAzAEAIA2aAQEArAIAIZsBAQCsAgAhnQEAAK0CnQEinwEAAK4CnwEioAEQAK8CACGhAQEArAIAIaIBAQCwAgAhowEBALACACGkAQEAsAIAIaUBAQCwAgAhpgFAALECACGnAUAAsgIAIagBQACyAgAhAgAAABUAIBQAAM4BACACAAAAFQAgFAAAzgEAIAMAAAAXACAbAADHAQAgHAAAzAEAIAEAAAAXACABAAAAFQAgCgkAAKcCACAhAACqAgAgIgAAqQIAIDMAAKgCACA0AACrAgAgogEAAKYCACCjAQAApgIAIKQBAACmAgAgpQEAAKYCACCmAQAApgIAIBCXAQAA2AEAMJgBAADVAQAQmQEAANgBADCaAQEA2QEAIZsBAQDZAQAhnQEAANoBnQEinwEAANsBnwEioAEQANwBACGhAQEA3QEAIaIBAQDeAQAhowEBAN4BACGkAQEA3gEAIaUBAQDeAQAhpgFAAN8BACGnAUAA4AEAIagBQADgAQAhAwAAABUAIAEAANQBADAgAADVAQAgAwAAABUAIAEAABYAMAIAABcAIBCXAQAA2AEAMJgBAADVAQAQmQEAANgBADCaAQEA2QEAIZsBAQDZAQAhnQEAANoBnQEinwEAANsBnwEioAEQANwBACGhAQEA3QEAIaIBAQDeAQAhowEBAN4BACGkAQEA3gEAIaUBAQDeAQAhpgFAAN8BACGnAUAA4AEAIagBQADgAQAhCwkAAOIBACAhAADqAQAgIgAA6gEAIKkBAQAAAAGqAQEAAAAEqwEBAAAABKwBAQAAAAGtAQEAAAABrgEBAAAAAa8BAQAAAAGwAQEA8QEAIQcJAADiAQAgIQAA8AEAICIAAPABACCpAQAAAJ0BAqoBAAAAnQEIqwEAAACdAQiwAQAA7wGdASIHCQAA4gEAICEAAO4BACAiAADuAQAgqQEAAACfAQKqAQAAAJ8BCKsBAAAAnwEIsAEAAO0BnwEiDQkAAOIBACAhAADsAQAgIgAA7AEAIDMAAOwBACA0AADsAQAgqQEQAAAAAaoBEAAAAASrARAAAAAErAEQAAAAAa0BEAAAAAGuARAAAAABrwEQAAAAAbABEADrAQAhDgkAAOIBACAhAADqAQAgIgAA6gEAIKkBAQAAAAGqAQEAAAAEqwEBAAAABKwBAQAAAAGtAQEAAAABrgEBAAAAAa8BAQAAAAGwAQEA6QEAIbEBAQAAAAGyAQEAAAABswEBAAAAAQ4JAADlAQAgIQAA6AEAICIAAOgBACCpAQEAAAABqgEBAAAABasBAQAAAAWsAQEAAAABrQEBAAAAAa4BAQAAAAGvAQEAAAABsAEBAOcBACGxAQEAAAABsgEBAAAAAbMBAQAAAAELCQAA5QEAICEAAOYBACAiAADmAQAgqQFAAAAAAaoBQAAAAAWrAUAAAAAFrAFAAAAAAa0BQAAAAAGuAUAAAAABrwFAAAAAAbABQADkAQAhCwkAAOIBACAhAADjAQAgIgAA4wEAIKkBQAAAAAGqAUAAAAAEqwFAAAAABKwBQAAAAAGtAUAAAAABrgFAAAAAAa8BQAAAAAGwAUAA4QEAIQsJAADiAQAgIQAA4wEAICIAAOMBACCpAUAAAAABqgFAAAAABKsBQAAAAASsAUAAAAABrQFAAAAAAa4BQAAAAAGvAUAAAAABsAFAAOEBACEIqQECAAAAAaoBAgAAAASrAQIAAAAErAECAAAAAa0BAgAAAAGuAQIAAAABrwECAAAAAbABAgDiAQAhCKkBQAAAAAGqAUAAAAAEqwFAAAAABKwBQAAAAAGtAUAAAAABrgFAAAAAAa8BQAAAAAGwAUAA4wEAIQsJAADlAQAgIQAA5gEAICIAAOYBACCpAUAAAAABqgFAAAAABasBQAAAAAWsAUAAAAABrQFAAAAAAa4BQAAAAAGvAUAAAAABsAFAAOQBACEIqQECAAAAAaoBAgAAAAWrAQIAAAAFrAECAAAAAa0BAgAAAAGuAQIAAAABrwECAAAAAbABAgDlAQAhCKkBQAAAAAGqAUAAAAAFqwFAAAAABawBQAAAAAGtAUAAAAABrgFAAAAAAa8BQAAAAAGwAUAA5gEAIQ4JAADlAQAgIQAA6AEAICIAAOgBACCpAQEAAAABqgEBAAAABasBAQAAAAWsAQEAAAABrQEBAAAAAa4BAQAAAAGvAQEAAAABsAEBAOcBACGxAQEAAAABsgEBAAAAAbMBAQAAAAELqQEBAAAAAaoBAQAAAAWrAQEAAAAFrAEBAAAAAa0BAQAAAAGuAQEAAAABrwEBAAAAAbABAQDoAQAhsQEBAAAAAbIBAQAAAAGzAQEAAAABDgkAAOIBACAhAADqAQAgIgAA6gEAIKkBAQAAAAGqAQEAAAAEqwEBAAAABKwBAQAAAAGtAQEAAAABrgEBAAAAAa8BAQAAAAGwAQEA6QEAIbEBAQAAAAGyAQEAAAABswEBAAAAAQupAQEAAAABqgEBAAAABKsBAQAAAASsAQEAAAABrQEBAAAAAa4BAQAAAAGvAQEAAAABsAEBAOoBACGxAQEAAAABsgEBAAAAAbMBAQAAAAENCQAA4gEAICEAAOwBACAiAADsAQAgMwAA7AEAIDQAAOwBACCpARAAAAABqgEQAAAABKsBEAAAAASsARAAAAABrQEQAAAAAa4BEAAAAAGvARAAAAABsAEQAOsBACEIqQEQAAAAAaoBEAAAAASrARAAAAAErAEQAAAAAa0BEAAAAAGuARAAAAABrwEQAAAAAbABEADsAQAhBwkAAOIBACAhAADuAQAgIgAA7gEAIKkBAAAAnwECqgEAAACfAQirAQAAAJ8BCLABAADtAZ8BIgSpAQAAAJ8BAqoBAAAAnwEIqwEAAACfAQiwAQAA7gGfASIHCQAA4gEAICEAAPABACAiAADwAQAgqQEAAACdAQKqAQAAAJ0BCKsBAAAAnQEIsAEAAO8BnQEiBKkBAAAAnQECqgEAAACdAQirAQAAAJ0BCLABAADwAZ0BIgsJAADiAQAgIQAA6gEAICIAAOoBACCpAQEAAAABqgEBAAAABKsBAQAAAASsAQEAAAABrQEBAAAAAa4BAQAAAAGvAQEAAAABsAEBAPEBACENlwEAAPIBADCYAQAAvwEAEJkBAADyAQAwmgEBANkBACGbAQEA2QEAIacBQADgAQAhqAFAAOABACG0AQEA2QEAIbUBAQDdAQAhtgEBAN0BACG3ARAA3AEAIbgBAgDzAQAhuQEQANwBACENCQAA4gEAICEAAOIBACAiAADiAQAgMwAA9QEAIDQAAOIBACCpAQIAAAABqgECAAAABKsBAgAAAASsAQIAAAABrQECAAAAAa4BAgAAAAGvAQIAAAABsAECAPQBACENCQAA4gEAICEAAOIBACAiAADiAQAgMwAA9QEAIDQAAOIBACCpAQIAAAABqgECAAAABKsBAgAAAASsAQIAAAABrQECAAAAAa4BAgAAAAGvAQIAAAABsAECAPQBACEIqQEIAAAAAaoBCAAAAASrAQgAAAAErAEIAAAAAa0BCAAAAAGuAQgAAAABrwEIAAAAAbABCAD1AQAhDZcBAAD2AQAwmAEAAKkBABCZAQAA9gEAMJoBAQDZAQAhnwEAAPcBvQEipwFAAOABACGoAUAA4AEAIboBAQDdAQAhuwEBANkBACG9ARAA3AEAIb4BEADcAQAhvwEQANwBACHAARAA3AEAIQcJAADiAQAgIQAA-QEAICIAAPkBACCpAQAAAL0BAqoBAAAAvQEIqwEAAAC9AQiwAQAA-AG9ASIHCQAA4gEAICEAAPkBACAiAAD5AQAgqQEAAAC9AQKqAQAAAL0BCKsBAAAAvQEIsAEAAPgBvQEiBKkBAAAAvQECqgEAAAC9AQirAQAAAL0BCLABAAD5Ab0BIgmXAQAA-gEAMJgBAACTAQAQmQEAAPoBADCaAQEA2QEAIacBQADgAQAhqAFAAOABACG0AQEA2QEAIbgBAgDzAQAhwQEBANkBACEHlwEAAPsBADCYAQAAfQAQmQEAAPsBADCaAQEA2QEAIacBQADgAQAhqAFAAOABACG7AQEA2QEAIQkEAAD-AQAgBwAA_wEAIJcBAAD8AQAwmAEAAAsAEJkBAAD8AQAwmgEBAIgCACGnAUAA_QEAIagBQAD9AQAhuwEBAIgCACEIqQFAAAAAAaoBQAAAAASrAUAAAAAErAFAAAAAAa0BQAAAAAGuAUAAAAABrwFAAAAAAbABQADjAQAhEwMAAI4CACAKAACPAgAglwEAAIcCADCYAQAAUgAQmQEAAIcCADCaAQEAiAIAIacBQAD9AQAhqAFAAP0BACHFAQEAiQIAIcYBAQCJAgAhxwEBAIkCACHIAQEAiQIAIckBAQCKAgAhywEAAIsCywEizAEgAIwCACHNAQEAigIAIc4BQACNAgAh1wEAAFIAINgBAABSACADwgEAAAcAIMMBAAAHACDEAQAABwAgD5cBAACAAgAwmAEAAGUAEJkBAACAAgAwmgEBANkBACGnAUAA4AEAIagBQADgAQAhxQEBAN0BACHGAQEA3QEAIccBAQDdAQAhyAEBAN0BACHJAQEA3gEAIcsBAACBAssBIswBIACCAgAhzQEBAN4BACHOAUAA3wEAIQcJAADiAQAgIQAAhgIAICIAAIYCACCpAQAAAMsBAqoBAAAAywEIqwEAAADLAQiwAQAAhQLLASIFCQAA4gEAICEAAIQCACAiAACEAgAgqQEgAAAAAbABIACDAgAhBQkAAOIBACAhAACEAgAgIgAAhAIAIKkBIAAAAAGwASAAgwIAIQKpASAAAAABsAEgAIQCACEHCQAA4gEAICEAAIYCACAiAACGAgAgqQEAAADLAQKqAQAAAMsBCKsBAAAAywEIsAEAAIUCywEiBKkBAAAAywECqgEAAADLAQirAQAAAMsBCLABAACGAssBIhEDAACOAgAgCgAAjwIAIJcBAACHAgAwmAEAAFIAEJkBAACHAgAwmgEBAIgCACGnAUAA_QEAIagBQAD9AQAhxQEBAIkCACHGAQEAiQIAIccBAQCJAgAhyAEBAIkCACHJAQEAigIAIcsBAACLAssBIswBIACMAgAhzQEBAIoCACHOAUAAjQIAIQipAQEAAAABqgEBAAAABKsBAQAAAASsAQEAAAABrQEBAAAAAa4BAQAAAAGvAQEAAAABsAEBAJACACELqQEBAAAAAaoBAQAAAASrAQEAAAAErAEBAAAAAa0BAQAAAAGuAQEAAAABrwEBAAAAAbABAQDqAQAhsQEBAAAAAbIBAQAAAAGzAQEAAAABC6kBAQAAAAGqAQEAAAAFqwEBAAAABawBAQAAAAGtAQEAAAABrgEBAAAAAa8BAQAAAAGwAQEA6AEAIbEBAQAAAAGyAQEAAAABswEBAAAAAQSpAQAAAMsBAqoBAAAAywEIqwEAAADLAQiwAQAAhgLLASICqQEgAAAAAbABIACEAgAhCKkBQAAAAAGqAUAAAAAFqwFAAAAABawBQAAAAAGtAUAAAAABrgFAAAAAAa8BQAAAAAGwAUAA5gEAIQsEAAD-AQAgBwAA_wEAIJcBAAD8AQAwmAEAAAsAEJkBAAD8AQAwmgEBAIgCACGnAUAA_QEAIagBQAD9AQAhuwEBAIgCACHXAQAACwAg2AEAAAsAIAPCAQAADQAgwwEAAA0AIMQBAAANACAIqQEBAAAAAaoBAQAAAASrAQEAAAAErAEBAAAAAa0BAQAAAAGuAQEAAAABrwEBAAAAAbABAQCQAgAhEJcBAACRAgAwmAEAAEwAEJkBAACRAgAwmgEBANkBACGnAUAA4AEAIagBQADgAQAhtgEBAN0BACG3ARAA3AEAIcwBIACCAgAhzwEBAN0BACHQAQEA3QEAIdEBAQDeAQAh0gECAPMBACHTAQEA3gEAIdQBAQDeAQAh1QEBANkBACEIlwEAAJICADCYAQAANgAQmQEAAJICADCaAQEA2QEAIacBQADgAQAhqAFAAOABACHPAQEA3QEAIdABAQDdAQAhCQ4AAJQCACCXAQAAkwIAMJgBAAAjABCZAQAAkwIAMJoBAQCIAgAhpwFAAP0BACGoAUAA_QEAIc8BAQCJAgAh0AEBAIkCACEDwgEAAAMAIMMBAAADACDEAQAAAwAgEQUAAJkCACCXAQAAlQIAMJgBAAAVABCZAQAAlQIAMJoBAQCIAgAhmwEBAIgCACGdAQAAlgKdASKfAQAAlwKfASKgARAAmAIAIaEBAQCJAgAhogEBAIoCACGjAQEAigIAIaQBAQCKAgAhpQEBAIoCACGmAUAAjQIAIacBQAD9AQAhqAFAAP0BACEEqQEAAACdAQKqAQAAAJ0BCKsBAAAAnQEIsAEAAPABnQEiBKkBAAAAnwECqgEAAACfAQirAQAAAJ8BCLABAADuAZ8BIgipARAAAAABqgEQAAAABKsBEAAAAASsARAAAAABrQEQAAAAAa4BEAAAAAGvARAAAAABsAEQAOwBACESBAAA_gEAIAcAAJ8CACAIAACgAgAglwEAAJ0CADCYAQAADQAQmQEAAJ0CADCaAQEAiAIAIZ8BAACeAr0BIqcBQAD9AQAhqAFAAP0BACG6AQEAiQIAIbsBAQCIAgAhvQEQAJgCACG-ARAAmAIAIb8BEACYAgAhwAEQAJgCACHXAQAADQAg2AEAAA0AIA8FAACZAgAgBgAAnAIAIJcBAACaAgAwmAEAABEAEJkBAACaAgAwmgEBAIgCACGbAQEAiAIAIacBQAD9AQAhqAFAAP0BACG0AQEAiAIAIbUBAQCJAgAhtgEBAIkCACG3ARAAmAIAIbgBAgCbAgAhuQEQAJgCACEIqQECAAAAAaoBAgAAAASrAQIAAAAErAECAAAAAa0BAgAAAAGuAQIAAAABrwECAAAAAbABAgDiAQAhFQsAAP8BACAMAACfAgAgDQAApQIAIJcBAACkAgAwmAEAAAMAEJkBAACkAgAwmgEBAIgCACGnAUAA_QEAIagBQAD9AQAhtgEBAIkCACG3ARAAmAIAIcwBIACMAgAhzwEBAIkCACHQAQEAiQIAIdEBAQCKAgAh0gECAJsCACHTAQEAigIAIdQBAQCKAgAh1QEBAIgCACHXAQAAAwAg2AEAAAMAIBAEAAD-AQAgBwAAnwIAIAgAAKACACCXAQAAnQIAMJgBAAANABCZAQAAnQIAMJoBAQCIAgAhnwEAAJ4CvQEipwFAAP0BACGoAUAA_QEAIboBAQCJAgAhuwEBAIgCACG9ARAAmAIAIb4BEACYAgAhvwEQAJgCACHAARAAmAIAIQSpAQAAAL0BAqoBAAAAvQEIqwEAAAC9AQiwAQAA-QG9ASIDwgEAABEAIMMBAAARACDEAQAAEQAgA8IBAAAVACDDAQAAFQAgxAEAABUAIAK0AQEAAAABwQEBAAAAAQsDAACjAgAgBgAAnAIAIJcBAACiAgAwmAEAAAcAEJkBAACiAgAwmgEBAIgCACGnAUAA_QEAIagBQAD9AQAhtAEBAIgCACG4AQIAmwIAIcEBAQCIAgAhCwQAAP4BACAHAAD_AQAglwEAAPwBADCYAQAACwAQmQEAAPwBADCaAQEAiAIAIacBQAD9AQAhqAFAAP0BACG7AQEAiAIAIdcBAAALACDYAQAACwAgEwsAAP8BACAMAACfAgAgDQAApQIAIJcBAACkAgAwmAEAAAMAEJkBAACkAgAwmgEBAIgCACGnAUAA_QEAIagBQAD9AQAhtgEBAIkCACG3ARAAmAIAIcwBIACMAgAhzwEBAIkCACHQAQEAiQIAIdEBAQCKAgAh0gECAJsCACHTAQEAigIAIdQBAQCKAgAh1QEBAIgCACELDgAAlAIAIJcBAACTAgAwmAEAACMAEJkBAACTAgAwmgEBAIgCACGnAUAA_QEAIagBQAD9AQAhzwEBAIkCACHQAQEAiQIAIdcBAAAjACDYAQAAIwAgAAAAAAAAAdwBAQAAAAEB3AEAAACdAQIB3AEAAACfAQIF3AEQAAAAAeIBEAAAAAHjARAAAAAB5AEQAAAAAeUBEAAAAAEB3AEBAAAAAQHcAUAAAAABAdwBQAAAAAEFGwAA-wMAIBwAAP4DACDZAQAA_AMAINoBAAD9AwAg3wEAAA8AIAMbAAD7AwAg2QEAAPwDACDfAQAADwAgAAAAAAAF3AECAAAAAeIBAgAAAAHjAQIAAAAB5AECAAAAAeUBAgAAAAEFGwAA8wMAIBwAAPkDACDZAQAA9AMAINoBAAD4AwAg3wEAAA8AIAUbAADxAwAgHAAA9gMAINkBAADyAwAg2gEAAPUDACDfAQAABQAgAxsAAPMDACDZAQAA9AMAIN8BAAAPACADGwAA8QMAINkBAADyAwAg3wEAAAUAIAAAAAAAAdwBAAAAvQECBRsAAOoDACAcAADvAwAg2QEAAOsDACDaAQAA7gMAIN8BAABPACALGwAA1AIAMBwAANkCADDZAQAA1QIAMNoBAADWAgAw2wEAANcCACDcAQAA2AIAMN0BAADYAgAw3gEAANgCADDfAQAA2AIAMOABAADaAgAw4QEAANsCADALGwAAyAIAMBwAAM0CADDZAQAAyQIAMNoBAADKAgAw2wEAAMsCACDcAQAAzAIAMN0BAADMAgAw3gEAAMwCADDfAQAAzAIAMOABAADOAgAw4QEAAM8CADAMmgEBAAAAAZ0BAAAAnQECnwEAAACfAQKgARAAAAABoQEBAAAAAaIBAQAAAAGjAQEAAAABpAEBAAAAAaUBAQAAAAGmAUAAAAABpwFAAAAAAagBQAAAAAECAAAAFwAgGwAA0wIAIAMAAAAXACAbAADTAgAgHAAA0gIAIAEUAADtAwAwEQUAAJkCACCXAQAAlQIAMJgBAAAVABCZAQAAlQIAMJoBAQAAAAGbAQEAiAIAIZ0BAACWAp0BIp8BAACXAp8BIqABEACYAgAhoQEBAIkCACGiAQEAAAABowEBAAAAAaQBAQCKAgAhpQEBAIoCACGmAUAAjQIAIacBQAD9AQAhqAFAAP0BACECAAAAFwAgFAAA0gIAIAIAAADQAgAgFAAA0QIAIBCXAQAAzwIAMJgBAADQAgAQmQEAAM8CADCaAQEAiAIAIZsBAQCIAgAhnQEAAJYCnQEinwEAAJcCnwEioAEQAJgCACGhAQEAiQIAIaIBAQCKAgAhowEBAIoCACGkAQEAigIAIaUBAQCKAgAhpgFAAI0CACGnAUAA_QEAIagBQAD9AQAhEJcBAADPAgAwmAEAANACABCZAQAAzwIAMJoBAQCIAgAhmwEBAIgCACGdAQAAlgKdASKfAQAAlwKfASKgARAAmAIAIaEBAQCJAgAhogEBAIoCACGjAQEAigIAIaQBAQCKAgAhpQEBAIoCACGmAUAAjQIAIacBQAD9AQAhqAFAAP0BACEMmgEBAKwCACGdAQAArQKdASKfAQAArgKfASKgARAArwIAIaEBAQCsAgAhogEBALACACGjAQEAsAIAIaQBAQCwAgAhpQEBALACACGmAUAAsQIAIacBQACyAgAhqAFAALICACEMmgEBAKwCACGdAQAArQKdASKfAQAArgKfASKgARAArwIAIaEBAQCsAgAhogEBALACACGjAQEAsAIAIaQBAQCwAgAhpQEBALACACGmAUAAsQIAIacBQACyAgAhqAFAALICACEMmgEBAAAAAZ0BAAAAnQECnwEAAACfAQKgARAAAAABoQEBAAAAAaIBAQAAAAGjAQEAAAABpAEBAAAAAaUBAQAAAAGmAUAAAAABpwFAAAAAAagBQAAAAAEKBgAAvgIAIJoBAQAAAAGnAUAAAAABqAFAAAAAAbQBAQAAAAG1AQEAAAABtgEBAAAAAbcBEAAAAAG4AQIAAAABuQEQAAAAAQIAAAATACAbAADfAgAgAwAAABMAIBsAAN8CACAcAADeAgAgARQAAOwDADAPBQAAmQIAIAYAAJwCACCXAQAAmgIAMJgBAAARABCZAQAAmgIAMJoBAQAAAAGbAQEAiAIAIacBQAD9AQAhqAFAAP0BACG0AQEAiAIAIbUBAQCJAgAhtgEBAIkCACG3ARAAmAIAIbgBAgCbAgAhuQEQAJgCACECAAAAEwAgFAAA3gIAIAIAAADcAgAgFAAA3QIAIA2XAQAA2wIAMJgBAADcAgAQmQEAANsCADCaAQEAiAIAIZsBAQCIAgAhpwFAAP0BACGoAUAA_QEAIbQBAQCIAgAhtQEBAIkCACG2AQEAiQIAIbcBEACYAgAhuAECAJsCACG5ARAAmAIAIQ2XAQAA2wIAMJgBAADcAgAQmQEAANsCADCaAQEAiAIAIZsBAQCIAgAhpwFAAP0BACGoAUAA_QEAIbQBAQCIAgAhtQEBAIkCACG2AQEAiQIAIbcBEACYAgAhuAECAJsCACG5ARAAmAIAIQmaAQEArAIAIacBQACyAgAhqAFAALICACG0AQEArAIAIbUBAQCsAgAhtgEBAKwCACG3ARAArwIAIbgBAgC6AgAhuQEQAK8CACEKBgAAvAIAIJoBAQCsAgAhpwFAALICACGoAUAAsgIAIbQBAQCsAgAhtQEBAKwCACG2AQEArAIAIbcBEACvAgAhuAECALoCACG5ARAArwIAIQoGAAC-AgAgmgEBAAAAAacBQAAAAAGoAUAAAAABtAEBAAAAAbUBAQAAAAG2AQEAAAABtwEQAAAAAbgBAgAAAAG5ARAAAAABAxsAAOoDACDZAQAA6wMAIN8BAABPACAEGwAA1AIAMNkBAADVAgAw2wEAANcCACDfAQAA2AIAMAQbAADIAgAw2QEAAMkCADDbAQAAywIAIN8BAADMAgAwAAAAAAAFGwAA4gMAIBwAAOgDACDZAQAA4wMAINoBAADnAwAg3wEAAGgAIAUbAADgAwAgHAAA5QMAINkBAADhAwAg2gEAAOQDACDfAQAABQAgAxsAAOIDACDZAQAA4wMAIN8BAABoACADGwAA4AMAINkBAADhAwAg3wEAAAUAIAAAAAUbAADaAwAgHAAA3gMAINkBAADbAwAg2gEAAN0DACDfAQAATwAgCxsAAPECADAcAAD2AgAw2QEAAPICADDaAQAA8wIAMNsBAAD0AgAg3AEAAPUCADDdAQAA9QIAMN4BAAD1AgAw3wEAAPUCADDgAQAA9wIAMOEBAAD4AgAwBgYAAOsCACCaAQEAAAABpwFAAAAAAagBQAAAAAG0AQEAAAABuAECAAAAAQIAAAAJACAbAAD8AgAgAwAAAAkAIBsAAPwCACAcAAD7AgAgARQAANwDADAMAwAAowIAIAYAAJwCACCXAQAAogIAMJgBAAAHABCZAQAAogIAMJoBAQAAAAGnAUAA_QEAIagBQAD9AQAhtAEBAIgCACG4AQIAmwIAIcEBAQCIAgAh1gEAAKECACACAAAACQAgFAAA-wIAIAIAAAD5AgAgFAAA-gIAIAmXAQAA-AIAMJgBAAD5AgAQmQEAAPgCADCaAQEAiAIAIacBQAD9AQAhqAFAAP0BACG0AQEAiAIAIbgBAgCbAgAhwQEBAIgCACEJlwEAAPgCADCYAQAA-QIAEJkBAAD4AgAwmgEBAIgCACGnAUAA_QEAIagBQAD9AQAhtAEBAIgCACG4AQIAmwIAIcEBAQCIAgAhBZoBAQCsAgAhpwFAALICACGoAUAAsgIAIbQBAQCsAgAhuAECALoCACEGBgAA6QIAIJoBAQCsAgAhpwFAALICACGoAUAAsgIAIbQBAQCsAgAhuAECALoCACEGBgAA6wIAIJoBAQAAAAGnAUAAAAABqAFAAAAAAbQBAQAAAAG4AQIAAAABAxsAANoDACDZAQAA2wMAIN8BAABPACAEGwAA8QIAMNkBAADyAgAw2wEAAPQCACDfAQAA9QIAMAUDAACbAwAgCgAAnAMAIMkBAACmAgAgzQEAAKYCACDOAQAApgIAIAAAAAAB3AEAAADLAQIB3AEgAAAAAQcbAACUAwAgHAAAlwMAINkBAACVAwAg2gEAAJYDACDdAQAACwAg3gEAAAsAIN8BAABoACALGwAAiAMAMBwAAI0DADDZAQAAiQMAMNoBAACKAwAw2wEAAIsDACDcAQAAjAMAMN0BAACMAwAw3gEAAIwDADDfAQAAjAMAMOABAACOAwAw4QEAAI8DADALBwAA4QIAIAgAAOICACCaAQEAAAABnwEAAAC9AQKnAUAAAAABqAFAAAAAAboBAQAAAAG9ARAAAAABvgEQAAAAAb8BEAAAAAHAARAAAAABAgAAAA8AIBsAAJMDACADAAAADwAgGwAAkwMAIBwAAJIDACABFAAA2QMAMBAEAAD-AQAgBwAAnwIAIAgAAKACACCXAQAAnQIAMJgBAAANABCZAQAAnQIAMJoBAQAAAAGfAQAAngK9ASKnAUAA_QEAIagBQAD9AQAhugEBAAAAAbsBAQCIAgAhvQEQAJgCACG-ARAAmAIAIb8BEACYAgAhwAEQAJgCACECAAAADwAgFAAAkgMAIAIAAACQAwAgFAAAkQMAIA2XAQAAjwMAMJgBAACQAwAQmQEAAI8DADCaAQEAiAIAIZ8BAACeAr0BIqcBQAD9AQAhqAFAAP0BACG6AQEAiQIAIbsBAQCIAgAhvQEQAJgCACG-ARAAmAIAIb8BEACYAgAhwAEQAJgCACENlwEAAI8DADCYAQAAkAMAEJkBAACPAwAwmgEBAIgCACGfAQAAngK9ASKnAUAA_QEAIagBQAD9AQAhugEBAIkCACG7AQEAiAIAIb0BEACYAgAhvgEQAJgCACG_ARAAmAIAIcABEACYAgAhCZoBAQCsAgAhnwEAAMQCvQEipwFAALICACGoAUAAsgIAIboBAQCsAgAhvQEQAK8CACG-ARAArwIAIb8BEACvAgAhwAEQAK8CACELBwAAxgIAIAgAAMcCACCaAQEArAIAIZ8BAADEAr0BIqcBQACyAgAhqAFAALICACG6AQEArAIAIb0BEACvAgAhvgEQAK8CACG_ARAArwIAIcABEACvAgAhCwcAAOECACAIAADiAgAgmgEBAAAAAZ8BAAAAvQECpwFAAAAAAagBQAAAAAG6AQEAAAABvQEQAAAAAb4BEAAAAAG_ARAAAAABwAEQAAAAAQQHAAD-AgAgmgEBAAAAAacBQAAAAAGoAUAAAAABAgAAAGgAIBsAAJQDACADAAAACwAgGwAAlAMAIBwAAJgDACAGAAAACwAgBwAA8AIAIBQAAJgDACCaAQEArAIAIacBQACyAgAhqAFAALICACEEBwAA8AIAIJoBAQCsAgAhpwFAALICACGoAUAAsgIAIQMbAACUAwAg2QEAAJUDACDfAQAAaAAgBBsAAIgDADDZAQAAiQMAMNsBAACLAwAg3wEAAIwDADACBAAA_wIAIAcAAIADACAAAAAAAAALGwAArgMAMBwAALIDADDZAQAArwMAMNoBAACwAwAw2wEAALEDACDcAQAA9QIAMN0BAAD1AgAw3gEAAPUCADDfAQAA9QIAMOABAACzAwAw4QEAAPgCADALGwAApQMAMBwAAKkDADDZAQAApgMAMNoBAACnAwAw2wEAAKgDACDcAQAA2AIAMN0BAADYAgAw3gEAANgCADDfAQAA2AIAMOABAACqAwAw4QEAANsCADAFGwAA0gMAIBwAANcDACDZAQAA0wMAINoBAADWAwAg3wEAAAEAIAoFAAC9AgAgmgEBAAAAAZsBAQAAAAGnAUAAAAABqAFAAAAAAbUBAQAAAAG2AQEAAAABtwEQAAAAAbgBAgAAAAG5ARAAAAABAgAAABMAIBsAAK0DACADAAAAEwAgGwAArQMAIBwAAKwDACABFAAA1QMAMAIAAAATACAUAACsAwAgAgAAANwCACAUAACrAwAgCZoBAQCsAgAhmwEBAKwCACGnAUAAsgIAIagBQACyAgAhtQEBAKwCACG2AQEArAIAIbcBEACvAgAhuAECALoCACG5ARAArwIAIQoFAAC7AgAgmgEBAKwCACGbAQEArAIAIacBQACyAgAhqAFAALICACG1AQEArAIAIbYBAQCsAgAhtwEQAK8CACG4AQIAugIAIbkBEACvAgAhCgUAAL0CACCaAQEAAAABmwEBAAAAAacBQAAAAAGoAUAAAAABtQEBAAAAAbYBAQAAAAG3ARAAAAABuAECAAAAAbkBEAAAAAEGAwAA6gIAIJoBAQAAAAGnAUAAAAABqAFAAAAAAbgBAgAAAAHBAQEAAAABAgAAAAkAIBsAALYDACADAAAACQAgGwAAtgMAIBwAALUDACABFAAA1AMAMAIAAAAJACAUAAC1AwAgAgAAAPkCACAUAAC0AwAgBZoBAQCsAgAhpwFAALICACGoAUAAsgIAIbgBAgC6AgAhwQEBAKwCACEGAwAA6AIAIJoBAQCsAgAhpwFAALICACGoAUAAsgIAIbgBAgC6AgAhwQEBAKwCACEGAwAA6gIAIJoBAQAAAAGnAUAAAAABqAFAAAAAAbgBAgAAAAHBAQEAAAABBBsAAK4DADDZAQAArwMAMNsBAACxAwAg3wEAAPUCADAEGwAApQMAMNkBAACmAwAw2wEAAKgDACDfAQAA2AIAMAMbAADSAwAg2QEAANMDACDfAQAAAQAgAAAACxsAAL4DADAcAADDAwAw2QEAAL8DADDaAQAAwAMAMNsBAADBAwAg3AEAAMIDADDdAQAAwgMAMN4BAADCAwAw3wEAAMIDADDgAQAAxAMAMOEBAADFAwAwDgsAALcDACAMAAC4AwAgmgEBAAAAAacBQAAAAAGoAUAAAAABtgEBAAAAAbcBEAAAAAHMASAAAAABzwEBAAAAAdABAQAAAAHRAQEAAAAB0gECAAAAAdMBAQAAAAHUAQEAAAABAgAAAAUAIBsAAMkDACADAAAABQAgGwAAyQMAIBwAAMgDACABFAAA0QMAMBMLAAD_AQAgDAAAnwIAIA0AAKUCACCXAQAApAIAMJgBAAADABCZAQAApAIAMJoBAQAAAAGnAUAA_QEAIagBQAD9AQAhtgEBAAAAAbcBEACYAgAhzAEgAIwCACHPAQEAiQIAIdABAQAAAAHRAQEAigIAIdIBAgCbAgAh0wEBAIoCACHUAQEAigIAIdUBAQCIAgAhAgAAAAUAIBQAAMgDACACAAAAxgMAIBQAAMcDACAQlwEAAMUDADCYAQAAxgMAEJkBAADFAwAwmgEBAIgCACGnAUAA_QEAIagBQAD9AQAhtgEBAIkCACG3ARAAmAIAIcwBIACMAgAhzwEBAIkCACHQAQEAiQIAIdEBAQCKAgAh0gECAJsCACHTAQEAigIAIdQBAQCKAgAh1QEBAIgCACEQlwEAAMUDADCYAQAAxgMAEJkBAADFAwAwmgEBAIgCACGnAUAA_QEAIagBQAD9AQAhtgEBAIkCACG3ARAAmAIAIcwBIACMAgAhzwEBAIkCACHQAQEAiQIAIdEBAQCKAgAh0gECAJsCACHTAQEAigIAIdQBAQCKAgAh1QEBAIgCACEMmgEBAKwCACGnAUAAsgIAIagBQACyAgAhtgEBAKwCACG3ARAArwIAIcwBIACFAwAhzwEBAKwCACHQAQEArAIAIdEBAQCwAgAh0gECALoCACHTAQEAsAIAIdQBAQCwAgAhDgsAAKIDACAMAACjAwAgmgEBAKwCACGnAUAAsgIAIagBQACyAgAhtgEBAKwCACG3ARAArwIAIcwBIACFAwAhzwEBAKwCACHQAQEArAIAIdEBAQCwAgAh0gECALoCACHTAQEAsAIAIdQBAQCwAgAhDgsAALcDACAMAAC4AwAgmgEBAAAAAacBQAAAAAGoAUAAAAABtgEBAAAAAbcBEAAAAAHMASAAAAABzwEBAAAAAdABAQAAAAHRAQEAAAAB0gECAAAAAdMBAQAAAAHUAQEAAAABBBsAAL4DADDZAQAAvwMAMNsBAADBAwAg3wEAAMIDADAAAwQAAP8CACAHAADOAwAgCAAAzwMAIAYLAACAAwAgDAAAzgMAIA0AANADACDRAQAApgIAINMBAACmAgAg1AEAAKYCACAAAAEOAADLAwAgDJoBAQAAAAGnAUAAAAABqAFAAAAAAbYBAQAAAAG3ARAAAAABzAEgAAAAAc8BAQAAAAHQAQEAAAAB0QEBAAAAAdIBAgAAAAHTAQEAAAAB1AEBAAAAAQWaAQEAAAABpwFAAAAAAagBQAAAAAHPAQEAAAAB0AEBAAAAAQIAAAABACAbAADSAwAgBZoBAQAAAAGnAUAAAAABqAFAAAAAAbgBAgAAAAHBAQEAAAABCZoBAQAAAAGbAQEAAAABpwFAAAAAAagBQAAAAAG1AQEAAAABtgEBAAAAAbcBEAAAAAG4AQIAAAABuQEQAAAAAQMAAAAjACAbAADSAwAgHAAA2AMAIAcAAAAjACAUAADYAwAgmgEBAKwCACGnAUAAsgIAIagBQACyAgAhzwEBAKwCACHQAQEArAIAIQWaAQEArAIAIacBQACyAgAhqAFAALICACHPAQEArAIAIdABAQCsAgAhCZoBAQAAAAGfAQAAAL0BAqcBQAAAAAGoAUAAAAABugEBAAAAAb0BEAAAAAG-ARAAAAABvwEQAAAAAcABEAAAAAENCgAAmgMAIJoBAQAAAAGnAUAAAAABqAFAAAAAAcUBAQAAAAHGAQEAAAABxwEBAAAAAcgBAQAAAAHJAQEAAAABywEAAADLAQLMASAAAAABzQEBAAAAAc4BQAAAAAECAAAATwAgGwAA2gMAIAWaAQEAAAABpwFAAAAAAagBQAAAAAG0AQEAAAABuAECAAAAAQMAAABSACAbAADaAwAgHAAA3wMAIA8AAABSACAKAACHAwAgFAAA3wMAIJoBAQCsAgAhpwFAALICACGoAUAAsgIAIcUBAQCsAgAhxgEBAKwCACHHAQEArAIAIcgBAQCsAgAhyQEBALACACHLAQAAhAPLASLMASAAhQMAIc0BAQCwAgAhzgFAALECACENCgAAhwMAIJoBAQCsAgAhpwFAALICACGoAUAAsgIAIcUBAQCsAgAhxgEBAKwCACHHAQEArAIAIcgBAQCsAgAhyQEBALACACHLAQAAhAPLASLMASAAhQMAIc0BAQCwAgAhzgFAALECACEPDAAAuAMAIA0AALkDACCaAQEAAAABpwFAAAAAAagBQAAAAAG2AQEAAAABtwEQAAAAAcwBIAAAAAHPAQEAAAAB0AEBAAAAAdEBAQAAAAHSAQIAAAAB0wEBAAAAAdQBAQAAAAHVAQEAAAABAgAAAAUAIBsAAOADACAFBAAA_QIAIJoBAQAAAAGnAUAAAAABqAFAAAAAAbsBAQAAAAECAAAAaAAgGwAA4gMAIAMAAAADACAbAADgAwAgHAAA5gMAIBEAAAADACAMAACjAwAgDQAApAMAIBQAAOYDACCaAQEArAIAIacBQACyAgAhqAFAALICACG2AQEArAIAIbcBEACvAgAhzAEgAIUDACHPAQEArAIAIdABAQCsAgAh0QEBALACACHSAQIAugIAIdMBAQCwAgAh1AEBALACACHVAQEArAIAIQ8MAACjAwAgDQAApAMAIJoBAQCsAgAhpwFAALICACGoAUAAsgIAIbYBAQCsAgAhtwEQAK8CACHMASAAhQMAIc8BAQCsAgAh0AEBAKwCACHRAQEAsAIAIdIBAgC6AgAh0wEBALACACHUAQEAsAIAIdUBAQCsAgAhAwAAAAsAIBsAAOIDACAcAADpAwAgBwAAAAsAIAQAAO8CACAUAADpAwAgmgEBAKwCACGnAUAAsgIAIagBQACyAgAhuwEBAKwCACEFBAAA7wIAIJoBAQCsAgAhpwFAALICACGoAUAAsgIAIbsBAQCsAgAhDQMAAJkDACCaAQEAAAABpwFAAAAAAagBQAAAAAHFAQEAAAABxgEBAAAAAccBAQAAAAHIAQEAAAAByQEBAAAAAcsBAAAAywECzAEgAAAAAc0BAQAAAAHOAUAAAAABAgAAAE8AIBsAAOoDACAJmgEBAAAAAacBQAAAAAGoAUAAAAABtAEBAAAAAbUBAQAAAAG2AQEAAAABtwEQAAAAAbgBAgAAAAG5ARAAAAABDJoBAQAAAAGdAQAAAJ0BAp8BAAAAnwECoAEQAAAAAaEBAQAAAAGiAQEAAAABowEBAAAAAaQBAQAAAAGlAQEAAAABpgFAAAAAAacBQAAAAAGoAUAAAAABAwAAAFIAIBsAAOoDACAcAADwAwAgDwAAAFIAIAMAAIYDACAUAADwAwAgmgEBAKwCACGnAUAAsgIAIagBQACyAgAhxQEBAKwCACHGAQEArAIAIccBAQCsAgAhyAEBAKwCACHJAQEAsAIAIcsBAACEA8sBIswBIACFAwAhzQEBALACACHOAUAAsQIAIQ0DAACGAwAgmgEBAKwCACGnAUAAsgIAIagBQACyAgAhxQEBAKwCACHGAQEArAIAIccBAQCsAgAhyAEBAKwCACHJAQEAsAIAIcsBAACEA8sBIswBIACFAwAhzQEBALACACHOAUAAsQIAIQ8LAAC3AwAgDQAAuQMAIJoBAQAAAAGnAUAAAAABqAFAAAAAAbYBAQAAAAG3ARAAAAABzAEgAAAAAc8BAQAAAAHQAQEAAAAB0QEBAAAAAdIBAgAAAAHTAQEAAAAB1AEBAAAAAdUBAQAAAAECAAAABQAgGwAA8QMAIAwEAADgAgAgCAAA4gIAIJoBAQAAAAGfAQAAAL0BAqcBQAAAAAGoAUAAAAABugEBAAAAAbsBAQAAAAG9ARAAAAABvgEQAAAAAb8BEAAAAAHAARAAAAABAgAAAA8AIBsAAPMDACADAAAAAwAgGwAA8QMAIBwAAPcDACARAAAAAwAgCwAAogMAIA0AAKQDACAUAAD3AwAgmgEBAKwCACGnAUAAsgIAIagBQACyAgAhtgEBAKwCACG3ARAArwIAIcwBIACFAwAhzwEBAKwCACHQAQEArAIAIdEBAQCwAgAh0gECALoCACHTAQEAsAIAIdQBAQCwAgAh1QEBAKwCACEPCwAAogMAIA0AAKQDACCaAQEArAIAIacBQACyAgAhqAFAALICACG2AQEArAIAIbcBEACvAgAhzAEgAIUDACHPAQEArAIAIdABAQCsAgAh0QEBALACACHSAQIAugIAIdMBAQCwAgAh1AEBALACACHVAQEArAIAIQMAAAANACAbAADzAwAgHAAA-gMAIA4AAAANACAEAADFAgAgCAAAxwIAIBQAAPoDACCaAQEArAIAIZ8BAADEAr0BIqcBQACyAgAhqAFAALICACG6AQEArAIAIbsBAQCsAgAhvQEQAK8CACG-ARAArwIAIb8BEACvAgAhwAEQAK8CACEMBAAAxQIAIAgAAMcCACCaAQEArAIAIZ8BAADEAr0BIqcBQACyAgAhqAFAALICACG6AQEArAIAIbsBAQCsAgAhvQEQAK8CACG-ARAArwIAIb8BEACvAgAhwAEQAK8CACEMBAAA4AIAIAcAAOECACCaAQEAAAABnwEAAAC9AQKnAUAAAAABqAFAAAAAAboBAQAAAAG7AQEAAAABvQEQAAAAAb4BEAAAAAG_ARAAAAABwAEQAAAAAQIAAAAPACAbAAD7AwAgAwAAAA0AIBsAAPsDACAcAAD_AwAgDgAAAA0AIAQAAMUCACAHAADGAgAgFAAA_wMAIJoBAQCsAgAhnwEAAMQCvQEipwFAALICACGoAUAAsgIAIboBAQCsAgAhuwEBAKwCACG9ARAArwIAIb4BEACvAgAhvwEQAK8CACHAARAArwIAIQwEAADFAgAgBwAAxgIAIJoBAQCsAgAhnwEAAMQCvQEipwFAALICACGoAUAAsgIAIboBAQCsAgAhuwEBAKwCACG9ARAArwIAIb4BEACvAgAhvwEQAK8CACHAARAArwIAIQIJAA0OBgIECQAMCwoDDB4HDQABAgMABAYAAgMEAAUHHAMJAAsDAwwECQAKChAGBAQABQcUBwgYCAkACQIFAAYGAAIBBQAGAgcZAAgaAAEKGwABBx0AAgsfAAwgAAEOIQAAAAADCQASIQATIgAUAAAAAwkAEiEAEyIAFAENAAEBDQABBQkAGSEAHCIAHTMAGjQAGwAAAAAABQkAGSEAHCIAHTMAGjQAGwAAAwkAIiEAIyIAJAAAAAMJACIhACMiACQBBAAFAQQABQMJACkhACoiACsAAAADCQApIQAqIgArAgMABAYAAgIDAAQGAAIFCQAwIQAzIgA0MwAxNAAyAAAAAAAFCQAwIQAzIgA0MwAxNAAyAQQABQEEAAUFCQA5IQA8IgA9MwA6NAA7AAAAAAAFCQA5IQA8IgA9MwA6NAA7AgUABgYAAgIFAAYGAAIFCQBCIQBFIgBGMwBDNABEAAAAAAAFCQBCIQBFIgBGMwBDNABEAQUABgEFAAYFCQBLIQBOIgBPMwBMNABNAAAAAAAFCQBLIQBOIgBPMwBMNABNDwIBECIBESUBEiYBEycBFSkBFisOFywPGC4BGTAOGjEQHTIBHjMBHzQOIzcRJDgVJTkCJjoCJzsCKDwCKT0CKj8CK0EOLEIWLUQCLkYOL0cXMEgCMUkCMkoONU0YNk4eN1AFOFEFOVQFOlUFO1YFPFgFPVoOPlsfP10FQF8OQWAgQmEFQ2IFRGMORWYhRmclR2kESGoESWwESm0ES24ETHAETXIOTnMmT3UEUHcOUXgnUnkEU3oEVHsOVX4oVn8sV4ABA1iBAQNZggEDWoMBA1uEAQNchgEDXYgBDl6JAS1fiwEDYI0BDmGOAS5ijwEDY5ABA2SRAQ5llAEvZpUBNWeWAQZolwEGaZgBBmqZAQZrmgEGbJwBBm2eAQ5unwE2b6EBBnCjAQ5xpAE3cqUBBnOmAQZ0pwEOdaoBOHarAT53rAEHeK0BB3muAQd6rwEHe7ABB3yyAQd9tAEOfrUBP3-3AQeAAbkBDoEBugFAggG7AQeDAbwBB4QBvQEOhQHAAUGGAcEBR4cBwgEIiAHDAQiJAcQBCIoBxQEIiwHGAQiMAcgBCI0BygEOjgHLAUiPAc0BCJABzwEOkQHQAUmSAdEBCJMB0gEIlAHTAQ6VAdYBSpYB1wFQ"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(__webpack_require__, 86));
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async ()=>await __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(__webpack_require__, 87)),
    getQueryCompilerWasmModule: async ()=>{
        const { wasm } = await __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(__webpack_require__, 88));
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return _prisma_client_runtime_client__rspack_import_0.getPrismaClient(config);
}


},
25(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AnyNull: () => (AnyNull),
  CartItemScalarFieldEnum: () => (CartItemScalarFieldEnum),
  CartScalarFieldEnum: () => (CartScalarFieldEnum),
  CategoryScalarFieldEnum: () => (CategoryScalarFieldEnum),
  DbNull: () => (DbNull),
  Decimal: () => (Decimal),
  JsonNull: () => (JsonNull),
  ModelName: () => (ModelName),
  NullTypes: () => (NullTypes),
  NullsOrder: () => (NullsOrder),
  OrderItemScalarFieldEnum: () => (OrderItemScalarFieldEnum),
  OrderScalarFieldEnum: () => (OrderScalarFieldEnum),
  PaymentScalarFieldEnum: () => (PaymentScalarFieldEnum),
  PrismaClientInitializationError: () => (PrismaClientInitializationError),
  PrismaClientKnownRequestError: () => (PrismaClientKnownRequestError),
  PrismaClientRustPanicError: () => (PrismaClientRustPanicError),
  PrismaClientUnknownRequestError: () => (PrismaClientUnknownRequestError),
  PrismaClientValidationError: () => (PrismaClientValidationError),
  ProductScalarFieldEnum: () => (ProductScalarFieldEnum),
  QueryMode: () => (QueryMode),
  SortOrder: () => (SortOrder),
  Sql: () => (Sql),
  TransactionIsolationLevel: () => (TransactionIsolationLevel),
  UserScalarFieldEnum: () => (UserScalarFieldEnum),
  defineExtension: () => (defineExtension),
  empty: () => (empty),
  getExtensionContext: () => (getExtensionContext),
  join: () => (join),
  prismaVersion: () => (prismaVersion),
  raw: () => (raw),
  sql: () => (sql)
});
/* import */ var _prisma_client_runtime_client__rspack_import_0 = __webpack_require__(24);
/* !!! This is code generated by Prisma. Do not edit directly. !!! */ /* eslint-disable */ // biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * WARNING: This is an internal file that is subject to change!
 *
 * 🛑 Under no circumstances should you import this file directly! 🛑
 *
 * All exports from this file are wrapped under a `Prisma` namespace object in the client.ts file.
 * While this enables partial backward compatibility, it is not part of the stable public API.
 *
 * If you are looking for your Models, Enums, and Input Types, please import them from the respective
 * model files in the `model` directory!
 */ 
/**
 * Prisma Errors
 */ const PrismaClientKnownRequestError = _prisma_client_runtime_client__rspack_import_0.PrismaClientKnownRequestError;
const PrismaClientUnknownRequestError = _prisma_client_runtime_client__rspack_import_0.PrismaClientUnknownRequestError;
const PrismaClientRustPanicError = _prisma_client_runtime_client__rspack_import_0.PrismaClientRustPanicError;
const PrismaClientInitializationError = _prisma_client_runtime_client__rspack_import_0.PrismaClientInitializationError;
const PrismaClientValidationError = _prisma_client_runtime_client__rspack_import_0.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */ const sql = _prisma_client_runtime_client__rspack_import_0.sqltag;
const empty = _prisma_client_runtime_client__rspack_import_0.empty;
const join = _prisma_client_runtime_client__rspack_import_0.join;
const raw = _prisma_client_runtime_client__rspack_import_0.raw;
const Sql = _prisma_client_runtime_client__rspack_import_0.Sql;
/**
 * Decimal.js
 */ const Decimal = _prisma_client_runtime_client__rspack_import_0.Decimal;
const getExtensionContext = _prisma_client_runtime_client__rspack_import_0.Extensions.getExtensionContext;
/**
 * Prisma Client JS version: 7.10.1
 * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
 */ const prismaVersion = {
    client: "7.10.1",
    engine: "d1b3f377ca835d73fd50954a5e22128b9ebdd6b8"
};
const NullTypes = {
    DbNull: _prisma_client_runtime_client__rspack_import_0.NullTypes.DbNull,
    JsonNull: _prisma_client_runtime_client__rspack_import_0.NullTypes.JsonNull,
    AnyNull: _prisma_client_runtime_client__rspack_import_0.NullTypes.AnyNull
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */ const DbNull = _prisma_client_runtime_client__rspack_import_0.DbNull;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */ const JsonNull = _prisma_client_runtime_client__rspack_import_0.JsonNull;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */ const AnyNull = _prisma_client_runtime_client__rspack_import_0.AnyNull;
const ModelName = {
    Category: 'Category',
    Product: 'Product',
    User: 'User',
    Cart: 'Cart',
    CartItem: 'CartItem',
    Order: 'Order',
    OrderItem: 'OrderItem',
    Payment: 'Payment'
};
/**
 * Enums
 */ const TransactionIsolationLevel = _prisma_client_runtime_client__rspack_import_0.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
const CategoryScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
const ProductScalarFieldEnum = {
    id: 'id',
    sku: 'sku',
    name: 'name',
    slug: 'slug',
    description: 'description',
    price: 'price',
    stock: 'stock',
    brand: 'brand',
    imageUrl: 'imageUrl',
    isActive: 'isActive',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
const UserScalarFieldEnum = {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    phone: 'phone',
    role: 'role',
    isActive: 'isActive',
    passwordResetTokenHash: 'passwordResetTokenHash',
    passwordResetExpiresAt: 'passwordResetExpiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
const CartScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
const CartItemScalarFieldEnum = {
    id: 'id',
    cartId: 'cartId',
    productId: 'productId',
    quantity: 'quantity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
const OrderScalarFieldEnum = {
    id: 'id',
    orderNumber: 'orderNumber',
    userId: 'userId',
    status: 'status',
    subtotal: 'subtotal',
    shippingFee: 'shippingFee',
    tax: 'tax',
    total: 'total',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
const OrderItemScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    productName: 'productName',
    sku: 'sku',
    price: 'price',
    quantity: 'quantity',
    lineTotal: 'lineTotal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
const PaymentScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    provider: 'provider',
    status: 'status',
    amount: 'amount',
    currency: 'currency',
    providerOrderId: 'providerOrderId',
    providerPaymentId: 'providerPaymentId',
    paymentMethod: 'paymentMethod',
    failureReason: 'failureReason',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
const NullsOrder = {
    first: 'first',
    last: 'last'
};
const defineExtension = _prisma_client_runtime_client__rspack_import_0.Extensions.defineExtension;


},
0(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var _nestjs_core__rspack_import_0 = __webpack_require__(1);
/* import */ var _app_module_js__rspack_import_1 = __webpack_require__(2);
/* import */ var _nestjs_common__rspack_import_2 = __webpack_require__(3);
/* import */ var _nestjs_swagger__rspack_import_3 = __webpack_require__(31);




async function bootstrap() {
    const app = await _nestjs_core__rspack_import_0.NestFactory.create(_app_module_js__rspack_import_1.AppModule, {
        rawBody: true
    });
    app.setGlobalPrefix("api");
    app.enableCors({
        origin: "http://localhost:5173"
    });
    app.useGlobalPipes(new _nestjs_common__rspack_import_2.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true
    }));
    // Swagger configuration
    const config = new _nestjs_swagger__rspack_import_3.DocumentBuilder().setTitle("Auto Parts E-commerce API").setDescription("API documentation for the Auto Parts E-commerce application").setVersion("1.0").addBearerAuth().build();
    const document = _nestjs_swagger__rspack_import_3.SwaggerModule.createDocument(app, config);
    _nestjs_swagger__rspack_import_3.SwaggerModule.setup("docs", app, document, {
        useGlobalPrefix: true
    });
    const port = Number(process.env.PORT) || 3000;
    await app.listen(port, "0.0.0.0");
    console.log(`Application running on http://localhost:${port}`);
    console.log(`Swagger running on http://localhost:${port}/api/docs`);
}
bootstrap();


},
74(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AdminOrderQueryDto: () => (AdminOrderQueryDto)
});
/* import */ var class_validator__rspack_import_0 = __webpack_require__(36);
/* import */ var _libs_shared_src_dto_pagination_dto_js__rspack_import_1 = __webpack_require__(37);
/* import */ var _generated_prisma_client_js__rspack_import_2 = __webpack_require__(20);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}



class AdminOrderQueryDto extends _libs_shared_src_dto_pagination_dto_js__rspack_import_1.PaginationDto {
    constructor(...args){
        super(...args), _define_property(this, "status", void 0), _define_property(this, "search", void 0);
    }
}
_ts_decorate([
    (0,class_validator__rspack_import_0.IsOptional)(),
    (0,class_validator__rspack_import_0.IsEnum)(_generated_prisma_client_js__rspack_import_2.OrderStatus),
    _ts_metadata("design:type", typeof _generated_prisma_client_js__rspack_import_2.OrderStatus === "undefined" ? Object : _generated_prisma_client_js__rspack_import_2.OrderStatus)
], AdminOrderQueryDto.prototype, "status", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsOptional)(),
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.MaxLength)(100),
    _ts_metadata("design:type", String)
], AdminOrderQueryDto.prototype, "search", void 0);


},
73(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  OrderQueryDto: () => (OrderQueryDto)
});
/* import */ var class_validator__rspack_import_0 = __webpack_require__(36);
/* import */ var _libs_shared_src_dto_pagination_dto_js__rspack_import_1 = __webpack_require__(37);
/* import */ var _generated_prisma_client_js__rspack_import_2 = __webpack_require__(20);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}



class OrderQueryDto extends _libs_shared_src_dto_pagination_dto_js__rspack_import_1.PaginationDto {
    constructor(...args){
        super(...args), _define_property(this, "status", void 0);
    }
}
_ts_decorate([
    (0,class_validator__rspack_import_0.IsOptional)(),
    (0,class_validator__rspack_import_0.IsEnum)(_generated_prisma_client_js__rspack_import_2.OrderStatus),
    _ts_metadata("design:type", typeof _generated_prisma_client_js__rspack_import_2.OrderStatus === "undefined" ? Object : _generated_prisma_client_js__rspack_import_2.OrderStatus)
], OrderQueryDto.prototype, "status", void 0);


},
75(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UpdateOrderStatusDto: () => (UpdateOrderStatusDto)
});
/* import */ var class_validator__rspack_import_0 = __webpack_require__(36);
/* import */ var _generated_prisma_client_js__rspack_import_1 = __webpack_require__(20);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}


class UpdateOrderStatusDto {
    constructor(){
        _define_property(this, "status", void 0);
    }
}
_ts_decorate([
    (0,class_validator__rspack_import_0.IsEnum)(_generated_prisma_client_js__rspack_import_1.OrderStatus),
    _ts_metadata("design:type", typeof _generated_prisma_client_js__rspack_import_1.OrderStatus === "undefined" ? Object : _generated_prisma_client_js__rspack_import_1.OrderStatus)
], UpdateOrderStatusDto.prototype, "status", void 0);


},
71(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  OrdersController: () => (OrdersController)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _orders_service_js__rspack_import_1 = __webpack_require__(72);
/* import */ var _shared_shared_guards_auth_guard_js__rspack_import_2 = __webpack_require__(12);
/* import */ var _shared_shared_decorators_response_message_decorator_js__rspack_import_3 = __webpack_require__(8);
/* import */ var _dto_order_query_dto_js__rspack_import_4 = __webpack_require__(73);
/* import */ var _dto_admin_order_query_dto_js__rspack_import_5 = __webpack_require__(74);
/* import */ var _shared_shared_decorators_roles_decorator_js__rspack_import_6 = __webpack_require__(11);
/* import */ var _shared_shared_guards_roles_guard_js__rspack_import_7 = __webpack_require__(32);
/* import */ var _dto_update_order_status_dto_js__rspack_import_8 = __webpack_require__(75);
/* import */ var _nestjs_swagger__rspack_import_9 = __webpack_require__(31);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}










class OrdersController {
    createOrder(request) {
        return this.ordersService.createOrder(request.user.id);
    }
    findCustomerOrders(request, query) {
        return this.ordersService.findCustomerOrders(request.user.id, query);
    }
    findOrderById(request, id) {
        return this.ordersService.findOrderById(request.user.id, id);
    }
    cancelOrder(request, id) {
        return this.ordersService.cancelOrder(request.user.id, id);
    }
    findAllOrdersForAdmin(query) {
        return this.ordersService.findAllOrdersForAdmin(query);
    }
    updateOrderStatus(id, updateOrderStatusDto) {
        return this.ordersService.updateOrderStatus(id, updateOrderStatusDto);
    }
    constructor(ordersService){
        _define_property(this, "ordersService", void 0);
        this.ordersService = ordersService;
    }
}
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Post)(),
    (0,_shared_shared_decorators_response_message_decorator_js__rspack_import_3.ResponseMessage)("Order placed successfully"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Req)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof AuthenticatedRequest === "undefined" ? Object : AuthenticatedRequest
    ]),
    _ts_metadata("design:returntype", void 0)
], OrdersController.prototype, "createOrder", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Get)(),
    (0,_shared_shared_decorators_response_message_decorator_js__rspack_import_3.ResponseMessage)("Orders retrieved successfully"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Request)()),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof AuthenticatedRequest === "undefined" ? Object : AuthenticatedRequest,
        typeof _dto_order_query_dto_js__rspack_import_4.OrderQueryDto === "undefined" ? Object : _dto_order_query_dto_js__rspack_import_4.OrderQueryDto
    ]),
    _ts_metadata("design:returntype", void 0)
], OrdersController.prototype, "findCustomerOrders", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Get)(":id"),
    (0,_shared_shared_decorators_response_message_decorator_js__rspack_import_3.ResponseMessage)("Order retrieved successfully"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Request)()),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Param)("id", _nestjs_common__rspack_import_0.ParseUUIDPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof AuthenticatedRequest === "undefined" ? Object : AuthenticatedRequest,
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], OrdersController.prototype, "findOrderById", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Patch)(":id/cancel"),
    (0,_shared_shared_decorators_response_message_decorator_js__rspack_import_3.ResponseMessage)("Order cancelled successfully"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Request)()),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Param)("id", _nestjs_common__rspack_import_0.ParseUUIDPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof AuthenticatedRequest === "undefined" ? Object : AuthenticatedRequest,
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], OrdersController.prototype, "cancelOrder", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Get)("admin/all"),
    (0,_nestjs_common__rspack_import_0.UseGuards)(_shared_shared_guards_auth_guard_js__rspack_import_2.AuthGuard, _shared_shared_guards_roles_guard_js__rspack_import_7.RolesGuard),
    (0,_shared_shared_decorators_roles_decorator_js__rspack_import_6.Roles)("ADMIN"),
    (0,_shared_shared_decorators_response_message_decorator_js__rspack_import_3.ResponseMessage)("All orders retrieved successfully"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dto_admin_order_query_dto_js__rspack_import_5.AdminOrderQueryDto === "undefined" ? Object : _dto_admin_order_query_dto_js__rspack_import_5.AdminOrderQueryDto
    ]),
    _ts_metadata("design:returntype", void 0)
], OrdersController.prototype, "findAllOrdersForAdmin", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Patch)(":id/status"),
    (0,_nestjs_common__rspack_import_0.UseGuards)(_shared_shared_guards_auth_guard_js__rspack_import_2.AuthGuard, _shared_shared_guards_roles_guard_js__rspack_import_7.RolesGuard),
    (0,_shared_shared_decorators_roles_decorator_js__rspack_import_6.Roles)("ADMIN"),
    (0,_shared_shared_decorators_response_message_decorator_js__rspack_import_3.ResponseMessage)("Order status updated successfully"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Param)("id", _nestjs_common__rspack_import_0.ParseUUIDPipe)),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _dto_update_order_status_dto_js__rspack_import_8.UpdateOrderStatusDto === "undefined" ? Object : _dto_update_order_status_dto_js__rspack_import_8.UpdateOrderStatusDto
    ]),
    _ts_metadata("design:returntype", void 0)
], OrdersController.prototype, "updateOrderStatus", null);
OrdersController = _ts_decorate([
    (0,_nestjs_swagger__rspack_import_9.ApiTags)("Orders"),
    (0,_nestjs_swagger__rspack_import_9.ApiBearerAuth)(),
    (0,_nestjs_common__rspack_import_0.Controller)("orders"),
    (0,_nestjs_common__rspack_import_0.UseGuards)(_shared_shared_guards_auth_guard_js__rspack_import_2.AuthGuard),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _orders_service_js__rspack_import_1.OrdersService === "undefined" ? Object : _orders_service_js__rspack_import_1.OrdersService
    ])
], OrdersController);


},
70(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  OrdersModule: () => (OrdersModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _orders_controller_js__rspack_import_1 = __webpack_require__(71);
/* import */ var _orders_service_js__rspack_import_2 = __webpack_require__(72);
/* import */ var _prisma_prisma_module_js__rspack_import_3 = __webpack_require__(28);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}




class OrdersModule {
}
OrdersModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        imports: [
            _prisma_prisma_module_js__rspack_import_3.PrismaModule
        ],
        controllers: [
            _orders_controller_js__rspack_import_1.OrdersController
        ],
        providers: [
            _orders_service_js__rspack_import_2.OrdersService
        ]
    })
], OrdersModule);


},
72(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  OrdersService: () => (OrdersService)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var crypto__rspack_import_1 = __webpack_require__(60);
/* import */ var _prisma_prisma_service_js__rspack_import_2 = __webpack_require__(18);
/* import */ var _generated_prisma_enums_js__rspack_import_3 = __webpack_require__(26);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}




class OrdersService {
    async createOrder(userId) {
        return this.prisma.$transaction(async (tx)=>{
            // 1. Get the customer's cart
            const cart = await tx.cart.findUnique({
                where: {
                    userId
                },
                include: {
                    items: {
                        include: {
                            product: true
                        }
                    }
                }
            });
            if (!cart || cart.items.length === 0) {
                throw new _nestjs_common__rspack_import_0.BadRequestException("Your cart is empty");
            }
            // 2. Validate product availability
            for (const item of cart.items){
                if (!item.product.isActive) {
                    throw new _nestjs_common__rspack_import_0.BadRequestException(`${item.product.name} is currently unavailable`);
                }
            }
            // 3. Deduct stock atomically.
            // Sort by product ID to reduce deadlock risk.
            const sortedItems = [
                ...cart.items
            ].sort((a, b)=>a.productId.localeCompare(b.productId));
            for (const item of sortedItems){
                const result = await tx.product.updateMany({
                    where: {
                        id: item.productId,
                        isActive: true,
                        stock: {
                            gte: item.quantity
                        }
                    },
                    data: {
                        stock: {
                            decrement: item.quantity
                        }
                    }
                });
                if (result.count !== 1) {
                    throw new _nestjs_common__rspack_import_0.BadRequestException(`Insufficient stock for ${item.product.name}. Please update your cart.`);
                }
            }
            // 4. Calculate totals using Prisma Decimal
            const subtotal = cart.items.reduce((total, item)=>total.plus(item.product.price.mul(item.quantity)), cart.items[0].product.price.mul(0));
            const shippingFee = subtotal.mul(0);
            const tax = subtotal.mul(0);
            const total = subtotal.plus(shippingFee).plus(tax);
            // 5. Create the order and its items
            const order = await tx.order.create({
                data: {
                    orderNumber: `ORD-${(0,crypto__rspack_import_1.randomUUID)().toUpperCase()}`,
                    userId,
                    subtotal,
                    shippingFee,
                    tax,
                    total,
                    items: {
                        create: cart.items.map((item)=>({
                                productId: item.productId,
                                productName: item.product.name,
                                sku: item.product.sku,
                                price: item.product.price,
                                quantity: item.quantity,
                                lineTotal: item.product.price.mul(item.quantity)
                            }))
                    }
                },
                include: {
                    items: true
                }
            });
            // 6. Clear the cart only after order creation
            await tx.cartItem.deleteMany({
                where: {
                    cartId: cart.id
                }
            });
            return order;
        });
    }
    async findCustomerOrders(userId, query) {
        const { page, limit, status } = query;
        const skip = (page - 1) * limit;
        const where = {
            userId,
            ...status && {
                status
            }
        };
        const [orders, total] = await Promise.all([
            this.prisma.order.findMany({
                where,
                skip,
                take: limit,
                orderBy: {
                    createdAt: "desc"
                },
                include: {
                    items: {
                        select: {
                            id: true,
                            productId: true,
                            productName: true,
                            sku: true,
                            price: true,
                            quantity: true,
                            lineTotal: true
                        }
                    }
                }
            }),
            this.prisma.order.count({
                where
            })
        ]);
        return {
            items: orders,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        };
    }
    async findOrderById(userId, orderId) {
        const order = await this.prisma.order.findFirst({
            where: {
                id: orderId,
                userId
            },
            include: {
                items: {
                    select: {
                        id: true,
                        productId: true,
                        productName: true,
                        sku: true,
                        price: true,
                        quantity: true,
                        lineTotal: true
                    }
                }
            }
        });
        if (!order) {
            throw new _nestjs_common__rspack_import_0.NotFoundException("Order not found");
        }
        return order;
    }
    async cancelOrder(userId, orderId) {
        return this.prisma.$transaction(async (tx)=>{
            // 1. Find customer's order
            const order = await tx.order.findFirst({
                where: {
                    id: orderId,
                    userId
                },
                include: {
                    items: true
                }
            });
            if (!order) {
                throw new _nestjs_common__rspack_import_0.NotFoundException("Order not found");
            }
            // 2. Check cancellation eligibility
            const allowedStatuses = [
                _generated_prisma_enums_js__rspack_import_3.OrderStatus.PENDING,
                _generated_prisma_enums_js__rspack_import_3.OrderStatus.CONFIRMED
            ];
            if (!allowedStatuses.includes(order.status)) {
                throw new _nestjs_common__rspack_import_0.ConflictException(`Order cannot be cancelled because its status is ${order.status}`);
            }
            // 3. Update status conditionally to prevent
            // duplicate stock restoration during concurrent requests
            const updated = await tx.order.updateMany({
                where: {
                    id: orderId,
                    userId,
                    status: order.status
                },
                data: {
                    status: _generated_prisma_enums_js__rspack_import_3.OrderStatus.CANCELLED
                }
            });
            if (updated.count !== 1) {
                throw new _nestjs_common__rspack_import_0.ConflictException("Order status changed. Please refresh and try again.");
            }
            // 4. Restore product stock
            for (const item of order.items){
                await tx.product.update({
                    where: {
                        id: item.productId
                    },
                    data: {
                        stock: {
                            increment: item.quantity
                        }
                    }
                });
            }
            // 5. Return updated order
            return tx.order.findUnique({
                where: {
                    id: orderId
                },
                include: {
                    items: true
                }
            });
        });
    }
    async findAllOrdersForAdmin(query) {
        const { page, limit, status, search } = query;
        const skip = (page - 1) * limit;
        const where = {
            ...status && {
                status
            },
            ...search && {
                orderNumber: {
                    contains: search,
                    mode: "insensitive"
                }
            }
        };
        const [orders, total] = await Promise.all([
            this.prisma.order.findMany({
                where,
                skip,
                take: limit,
                orderBy: {
                    createdAt: "desc"
                },
                include: {
                    user: {
                        select: {
                            id: true,
                            email: true,
                            role: true
                        }
                    },
                    items: {
                        select: {
                            id: true,
                            productId: true,
                            productName: true,
                            sku: true,
                            price: true,
                            quantity: true,
                            lineTotal: true
                        }
                    }
                }
            }),
            this.prisma.order.count({
                where
            })
        ]);
        return {
            items: orders,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        };
    }
    async updateOrderStatus(orderId, updateOrderStatusDto) {
        const { status: newStatus } = updateOrderStatusDto;
        const allowedTransitions = {
            [_generated_prisma_enums_js__rspack_import_3.OrderStatus.PENDING]: [
                _generated_prisma_enums_js__rspack_import_3.OrderStatus.CONFIRMED
            ],
            [_generated_prisma_enums_js__rspack_import_3.OrderStatus.CONFIRMED]: [
                _generated_prisma_enums_js__rspack_import_3.OrderStatus.PROCESSING
            ],
            [_generated_prisma_enums_js__rspack_import_3.OrderStatus.PROCESSING]: [
                _generated_prisma_enums_js__rspack_import_3.OrderStatus.SHIPPED
            ],
            [_generated_prisma_enums_js__rspack_import_3.OrderStatus.SHIPPED]: [
                _generated_prisma_enums_js__rspack_import_3.OrderStatus.DELIVERED
            ],
            [_generated_prisma_enums_js__rspack_import_3.OrderStatus.DELIVERED]: [],
            [_generated_prisma_enums_js__rspack_import_3.OrderStatus.CANCELLED]: []
        };
        return this.prisma.$transaction(async (tx)=>{
            // 1. Find existing order
            const order = await tx.order.findUnique({
                where: {
                    id: orderId
                }
            });
            if (!order) {
                throw new _nestjs_common__rspack_import_0.NotFoundException("Order not found");
            }
            // 2. Validate status transition
            const allowedStatuses = allowedTransitions[order.status];
            if (!allowedStatuses.includes(newStatus)) {
                throw new _nestjs_common__rspack_import_0.ConflictException(`Cannot change order status from ${order.status} to ${newStatus}`);
            }
            // 3. Update only if the status hasn't changed concurrently
            const updated = await tx.order.updateMany({
                where: {
                    id: orderId,
                    status: order.status
                },
                data: {
                    status: newStatus
                }
            });
            if (updated.count !== 1) {
                throw new _nestjs_common__rspack_import_0.ConflictException("Order status changed. Please refresh and try again.");
            }
            // 4. Return updated order
            return tx.order.findUnique({
                where: {
                    id: orderId
                },
                include: {
                    user: {
                        select: {
                            id: true,
                            email: true,
                            role: true
                        }
                    },
                    items: true
                }
            });
        });
    }
    constructor(prisma){
        _define_property(this, "prisma", void 0);
        this.prisma = prisma;
    }
}
OrdersService = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prisma_prisma_service_js__rspack_import_2.PrismaService === "undefined" ? Object : _prisma_prisma_service_js__rspack_import_2.PrismaService
    ])
], OrdersService);


},
82(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PaymentQueryDto: () => (PaymentQueryDto)
});
/* import */ var class_validator__rspack_import_0 = __webpack_require__(36);
/* import */ var class_transformer__rspack_import_1 = __webpack_require__(38);
/* import */ var _generated_prisma_client_js__rspack_import_2 = __webpack_require__(20);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}



class PaymentQueryDto {
    constructor(){
        _define_property(this, "page", 1);
        _define_property(this, "limit", 10);
        _define_property(this, "search", void 0);
        _define_property(this, "status", void 0);
        _define_property(this, "fromDate", void 0);
        _define_property(this, "toDate", void 0);
    }
}
_ts_decorate([
    (0,class_validator__rspack_import_0.IsOptional)(),
    (0,class_transformer__rspack_import_1.Type)(()=>Number),
    (0,class_validator__rspack_import_0.IsInt)(),
    (0,class_validator__rspack_import_0.Min)(1),
    _ts_metadata("design:type", Number)
], PaymentQueryDto.prototype, "page", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsOptional)(),
    (0,class_transformer__rspack_import_1.Type)(()=>Number),
    (0,class_validator__rspack_import_0.IsInt)(),
    (0,class_validator__rspack_import_0.Min)(1),
    (0,class_validator__rspack_import_0.Max)(100),
    _ts_metadata("design:type", Number)
], PaymentQueryDto.prototype, "limit", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsOptional)(),
    (0,class_validator__rspack_import_0.IsString)(),
    _ts_metadata("design:type", String)
], PaymentQueryDto.prototype, "search", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsOptional)(),
    (0,class_validator__rspack_import_0.IsEnum)(_generated_prisma_client_js__rspack_import_2.PaymentStatus),
    _ts_metadata("design:type", typeof _generated_prisma_client_js__rspack_import_2.PaymentStatus === "undefined" ? Object : _generated_prisma_client_js__rspack_import_2.PaymentStatus)
], PaymentQueryDto.prototype, "status", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsOptional)(),
    (0,class_validator__rspack_import_0.IsString)(),
    _ts_metadata("design:type", String)
], PaymentQueryDto.prototype, "fromDate", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsOptional)(),
    (0,class_validator__rspack_import_0.IsString)(),
    _ts_metadata("design:type", String)
], PaymentQueryDto.prototype, "toDate", void 0);


},
81(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  VerifyPaymentDto: () => (VerifyPaymentDto)
});
/* import */ var class_validator__rspack_import_0 = __webpack_require__(36);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}

class VerifyPaymentDto {
    constructor(){
        _define_property(this, "razorpay_order_id", void 0);
        _define_property(this, "razorpay_payment_id", void 0);
        _define_property(this, "razorpay_signature", void 0);
    }
}
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.IsNotEmpty)(),
    _ts_metadata("design:type", String)
], VerifyPaymentDto.prototype, "razorpay_order_id", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.IsNotEmpty)(),
    _ts_metadata("design:type", String)
], VerifyPaymentDto.prototype, "razorpay_payment_id", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.Matches)(/^[a-fA-F0-9]{64}$/),
    _ts_metadata("design:type", String)
], VerifyPaymentDto.prototype, "razorpay_signature", void 0);


},
79(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RazorpayGateway: () => (RazorpayGateway)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _nestjs_config__rspack_import_1 = __webpack_require__(16);
/* import */ var razorpay__rspack_import_2 = __webpack_require__(80);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}



class RazorpayGateway {
    async createOrder(amount, receipt, currency = "INR") {
        return this.razorpay.orders.create({
            amount,
            currency,
            receipt
        });
    }
    async fetchPayment(paymentId) {
        return this.razorpay.payments.fetch(paymentId);
    }
    constructor(configService){
        _define_property(this, "configService", void 0);
        _define_property(this, "razorpay", void 0);
        this.configService = configService;
        const keyId = this.configService.get("RAZORPAY_KEY_ID");
        const keySecret = this.configService.get("RAZORPAY_KEY_SECRET");
        if (!keyId || !keySecret) {
            throw new _nestjs_common__rspack_import_0.InternalServerErrorException("Razorpay credentials are missing");
        }
        this.razorpay = new razorpay__rspack_import_2["default"]({
            key_id: keyId,
            key_secret: keySecret
        });
    }
}
RazorpayGateway = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _nestjs_config__rspack_import_1.ConfigService === "undefined" ? Object : _nestjs_config__rspack_import_1.ConfigService
    ])
], RazorpayGateway);


},
77(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PaymentsController: () => (PaymentsController)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _payments_service_js__rspack_import_1 = __webpack_require__(78);
/* import */ var _shared_shared_guards_auth_guard_js__rspack_import_2 = __webpack_require__(12);
/* import */ var _dto_verify_payment_dto_js__rspack_import_3 = __webpack_require__(81);
/* import */ var _dto_payment_query_dto_js__rspack_import_4 = __webpack_require__(82);
/* import */ var _nestjs_swagger__rspack_import_5 = __webpack_require__(31);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}






class PaymentsController {
    // Public Razorpay webhook
    async handleWebhook(req, signature) {
        return this.paymentsService.handleWebhook(req.rawBody, signature);
    }
    async createPayment(req, orderId) {
        return this.paymentsService.createPayment(req.user.id, orderId);
    }
    async verifyPayment(req, dto) {
        return this.paymentsService.verifyPayment(req.user.id, dto);
    }
    async getPaymentById(paymentId, req) {
        return this.paymentsService.getPaymentById(paymentId, req.user);
    }
    async getPaymentByOrderId(orderId, req) {
        return this.paymentsService.getPaymentByOrderId(orderId, req.user);
    }
    async getAllPayments(query, req) {
        return this.paymentsService.getAllPayments(query, req.user);
    }
    constructor(paymentsService){
        _define_property(this, "paymentsService", void 0);
        this.paymentsService = paymentsService;
    }
}
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Post)("webhook"),
    (0,_nestjs_common__rspack_import_0.HttpCode)(200),
    (0,_nestjs_swagger__rspack_import_5.ApiOperation)({
        summary: "Handle Razorpay webhook events"
    }),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Req)()),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Headers)("x-razorpay-signature")),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object,
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], PaymentsController.prototype, "handleWebhook", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.UseGuards)(_shared_shared_guards_auth_guard_js__rspack_import_2.AuthGuard),
    (0,_nestjs_common__rspack_import_0.Post)("create"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Req)()),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Body)("orderId")),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object,
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], PaymentsController.prototype, "createPayment", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.UseGuards)(_shared_shared_guards_auth_guard_js__rspack_import_2.AuthGuard),
    (0,_nestjs_common__rspack_import_0.Post)("verify"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Req)()),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object,
        typeof _dto_verify_payment_dto_js__rspack_import_3.VerifyPaymentDto === "undefined" ? Object : _dto_verify_payment_dto_js__rspack_import_3.VerifyPaymentDto
    ]),
    _ts_metadata("design:returntype", Promise)
], PaymentsController.prototype, "verifyPayment", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.UseGuards)(_shared_shared_guards_auth_guard_js__rspack_import_2.AuthGuard),
    (0,_nestjs_common__rspack_import_0.Get)(":paymentId"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Param)("paymentId")),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Req)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        Object
    ]),
    _ts_metadata("design:returntype", Promise)
], PaymentsController.prototype, "getPaymentById", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.UseGuards)(_shared_shared_guards_auth_guard_js__rspack_import_2.AuthGuard),
    (0,_nestjs_common__rspack_import_0.Get)("order/:orderId"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Param)("orderId")),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Req)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        Object
    ]),
    _ts_metadata("design:returntype", Promise)
], PaymentsController.prototype, "getPaymentByOrderId", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.UseGuards)(_shared_shared_guards_auth_guard_js__rspack_import_2.AuthGuard),
    (0,_nestjs_common__rspack_import_0.Get)(),
    (0,_nestjs_swagger__rspack_import_5.ApiOperation)({
        summary: "Get all payments (Admin)"
    }),
    (0,_nestjs_swagger__rspack_import_5.ApiResponse)({
        status: 200,
        description: "Payments retrieved successfully"
    }),
    (0,_nestjs_swagger__rspack_import_5.ApiBearerAuth)(),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Query)()),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Req)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dto_payment_query_dto_js__rspack_import_4.PaymentQueryDto === "undefined" ? Object : _dto_payment_query_dto_js__rspack_import_4.PaymentQueryDto,
        Object
    ]),
    _ts_metadata("design:returntype", Promise)
], PaymentsController.prototype, "getAllPayments", null);
PaymentsController = _ts_decorate([
    (0,_nestjs_swagger__rspack_import_5.ApiTags)("Payments"),
    (0,_nestjs_common__rspack_import_0.Controller)("payments"),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _payments_service_js__rspack_import_1.PaymentsService === "undefined" ? Object : _payments_service_js__rspack_import_1.PaymentsService
    ])
], PaymentsController);


},
76(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PaymentsModule: () => (PaymentsModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _nestjs_config__rspack_import_1 = __webpack_require__(16);
/* import */ var _payments_controller_js__rspack_import_2 = __webpack_require__(77);
/* import */ var _payments_service_js__rspack_import_3 = __webpack_require__(78);
/* import */ var _gateways_razorpay_gateway_js__rspack_import_4 = __webpack_require__(79);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}





class PaymentsModule {
}
PaymentsModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        imports: [
            _nestjs_config__rspack_import_1.ConfigModule
        ],
        controllers: [
            _payments_controller_js__rspack_import_2.PaymentsController
        ],
        providers: [
            _payments_service_js__rspack_import_3.PaymentsService,
            _gateways_razorpay_gateway_js__rspack_import_4.RazorpayGateway
        ],
        exports: [
            _payments_service_js__rspack_import_3.PaymentsService
        ]
    })
], PaymentsModule);


},
78(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PaymentsService: () => (PaymentsService)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _nestjs_config__rspack_import_1 = __webpack_require__(16);
/* import */ var _prisma_prisma_service_js__rspack_import_2 = __webpack_require__(18);
/* import */ var _gateways_razorpay_gateway_js__rspack_import_3 = __webpack_require__(79);
/* import */ var crypto__rspack_import_4 = __webpack_require__(60);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}





class PaymentsService {
    async createPayment(userId, orderId) {
        // 1. Find order
        const order = await this.prisma.order.findUnique({
            where: {
                id: orderId
            },
            include: {
                payments: true
            }
        });
        if (!order) {
            throw new _nestjs_common__rspack_import_0.NotFoundException("Order not found");
        }
        // 2. Verify order ownership
        if (order.userId !== userId) {
            throw new _nestjs_common__rspack_import_0.ForbiddenException("You cannot pay for this order");
        }
        // 3. Check order status
        if (order.status === "CANCELLED") {
            throw new _nestjs_common__rspack_import_0.BadRequestException("Cannot pay for a cancelled order");
        }
        // 4. Prevent duplicate successful payments
        const alreadyPaid = order.payments.some((payment)=>payment.status === "CAPTURED" || payment.status === "REFUNDED" || payment.status === "PARTIALLY_REFUNDED");
        if (alreadyPaid) {
            throw new _nestjs_common__rspack_import_0.ConflictException("This order has already been paid");
        }
        // 5. Convert INR to paise
        const amountInPaise = order.total.mul(100).toNumber();
        if (!Number.isSafeInteger(amountInPaise) || amountInPaise <= 0) {
            throw new _nestjs_common__rspack_import_0.BadRequestException("Invalid order payment amount");
        }
        // 6. Create payment record
        const payment = await this.prisma.payment.create({
            data: {
                orderId: order.id,
                provider: "RAZORPAY",
                amount: order.total,
                currency: "INR"
            }
        });
        try {
            // 7. Create Razorpay order
            const razorpayOrder = await this.razorpayGateway.createOrder(amountInPaise, payment.id, "INR");
            // 8. Update payment with Razorpay order ID
            await this.prisma.payment.update({
                where: {
                    id: payment.id
                },
                data: {
                    providerOrderId: razorpayOrder.id
                }
            });
            // 9. Return checkout details
            return {
                paymentId: payment.id,
                orderId: order.id,
                razorpayOrderId: razorpayOrder.id,
                amount: razorpayOrder.amount,
                currency: razorpayOrder.currency,
                keyId: this.configService.get("RAZORPAY_KEY_ID")
            };
        } catch (error) {
            // 10. Mark failed payment initialization
            await this.prisma.payment.update({
                where: {
                    id: payment.id
                },
                data: {
                    status: "FAILED",
                    failureReason: error instanceof Error ? error.message.slice(0, 500) : "Payment initialization failed"
                }
            });
            throw new _nestjs_common__rspack_import_0.InternalServerErrorException("Unable to initialize payment. Please try again.");
        }
    }
    async verifyPayment(userId, dto) {
        // 1. Find payment and verify ownership
        const payment = await this.prisma.payment.findFirst({
            where: {
                providerOrderId: dto.razorpay_order_id,
                provider: "RAZORPAY",
                order: {
                    userId
                }
            },
            include: {
                order: true
            }
        });
        if (!payment) {
            throw new _nestjs_common__rspack_import_0.NotFoundException("Payment not found");
        }
        // 2. Prevent duplicate verification
        if (payment.status === "CAPTURED") {
            return {
                message: "Payment already verified",
                paymentId: payment.id,
                status: payment.status
            };
        }
        // 3. Generate signature using stored order ID
        const secret = this.configService.get("RAZORPAY_KEY_SECRET");
        if (!secret) {
            throw new _nestjs_common__rspack_import_0.InternalServerErrorException("Razorpay secret is not configured");
        }
        const expectedSignature = (0,crypto__rspack_import_4.createHmac)("sha256", secret).update(`${payment.providerOrderId}|${dto.razorpay_payment_id}`).digest();
        const receivedSignature = Buffer.from(dto.razorpay_signature, "hex");
        // 4. Compare signatures securely
        if (expectedSignature.length !== receivedSignature.length || !(0,crypto__rspack_import_4.timingSafeEqual)(expectedSignature, receivedSignature)) {
            throw new _nestjs_common__rspack_import_0.BadRequestException("Invalid payment signature");
        }
        // 5. Fetch actual payment from Razorpay
        const razorpayPayment = await this.razorpayGateway.fetchPayment(dto.razorpay_payment_id);
        // 6. Validate payment details
        const expectedAmount = payment.amount.mul(100).toNumber();
        if (razorpayPayment.order_id !== payment.providerOrderId || razorpayPayment.amount !== expectedAmount || razorpayPayment.currency !== payment.currency) {
            throw new _nestjs_common__rspack_import_0.BadRequestException("Payment details do not match");
        }
        // 7. Check actual payment status
        if (razorpayPayment.status !== "captured" && razorpayPayment.status !== "authorized") {
            throw new _nestjs_common__rspack_import_0.BadRequestException("Payment is not successful");
        }
        // 8. Update database
        const status = razorpayPayment.status === "captured" ? "CAPTURED" : "AUTHORIZED";
        await this.prisma.$transaction(async (tx)=>{
            await tx.payment.update({
                where: {
                    id: payment.id
                },
                data: {
                    providerPaymentId: dto.razorpay_payment_id,
                    status,
                    paymentMethod: razorpayPayment.method,
                    paidAt: status === "CAPTURED" ? new Date() : null
                }
            });
            if (status === "CAPTURED") {
                await tx.order.update({
                    where: {
                        id: payment.orderId
                    },
                    data: {
                        status: "CONFIRMED"
                    }
                });
            }
        });
        return {
            message: "Payment verified successfully",
            paymentId: payment.id,
            orderId: payment.orderId,
            status
        };
    }
    async getPaymentById(paymentId, user) {
        const payment = await this.prisma.payment.findUnique({
            where: {
                id: paymentId
            },
            include: {
                order: {
                    select: {
                        id: true,
                        userId: true
                    }
                }
            }
        });
        if (!payment) {
            throw new _nestjs_common__rspack_import_0.NotFoundException("Payment not found");
        }
        if (user.role !== "ADMIN" && payment.order.userId !== user.id) {
            throw new _nestjs_common__rspack_import_0.ForbiddenException("You are not allowed to access this payment");
        }
        return payment;
    }
    async getPaymentByOrderId(orderId, user) {
        const order = await this.prisma.order.findUnique({
            where: {
                id: orderId
            },
            select: {
                id: true,
                userId: true
            }
        });
        if (!order) {
            throw new _nestjs_common__rspack_import_0.NotFoundException("Order not found");
        }
        if (user.role !== "ADMIN" && order.userId !== user.id) {
            throw new _nestjs_common__rspack_import_0.ForbiddenException("You are not allowed to access this order");
        }
        const payments = await this.prisma.payment.findMany({
            where: {
                orderId
            },
            orderBy: {
                createdAt: "desc"
            }
        });
        return payments;
    }
    async getAllPayments(query, user) {
        const { page = 1, limit = 10, search, status, fromDate, toDate } = query;
        if (user.role !== "ADMIN") {
            throw new _nestjs_common__rspack_import_0.ForbiddenException("Only admins can access all payments");
        }
        const skip = (page - 1) * limit;
        const where = {
            ...status && {
                status
            },
            ...search && {
                OR: [
                    {
                        id: search
                    },
                    {
                        orderId: search
                    },
                    {
                        providerOrderId: {
                            contains: search,
                            mode: "insensitive"
                        }
                    },
                    {
                        providerPaymentId: {
                            contains: search,
                            mode: "insensitive"
                        }
                    }
                ]
            },
            ...fromDate || toDate ? {
                createdAt: {
                    ...fromDate && {
                        gte: new Date(fromDate)
                    },
                    ...toDate && {
                        lte: new Date(toDate)
                    }
                }
            } : {}
        };
        const [payments, total] = await Promise.all([
            this.prisma.payment.findMany({
                where,
                skip,
                take: limit,
                orderBy: {
                    createdAt: "desc"
                },
                include: {
                    order: {
                        select: {
                            id: true,
                            userId: true
                        }
                    }
                }
            }),
            this.prisma.payment.count({
                where
            })
        ]);
        return {
            payments,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
                hasNextPage: page < Math.ceil(total / limit),
                hasPreviousPage: page > 1
            }
        };
    }
    async handleWebhook(rawBody, signature) {
        // 1. Validate request
        if (!rawBody || !signature) {
            throw new _nestjs_common__rspack_import_0.BadRequestException("Missing webhook body or signature");
        }
        _nestjs_common__rspack_import_0.Logger.log("Received webhook", "PaymentsService");
        _nestjs_common__rspack_import_0.Logger.log(`Raw body: ${rawBody.toString("utf8")}`, "PaymentsService");
        _nestjs_common__rspack_import_0.Logger.log(`Signature: ${signature}`, "PaymentsService");
        // 2. Get webhook secret
        const webhookSecret = this.configService.get("RAZORPAY_WEBHOOK_SECRET");
        if (!webhookSecret) {
            throw new _nestjs_common__rspack_import_0.InternalServerErrorException("Razorpay webhook secret is not configured");
        }
        // 3. Generate expected signature
        const expectedSignature = (0,crypto__rspack_import_4.createHmac)("sha256", webhookSecret).update(rawBody).digest();
        // 4. Validate received signature format
        if (!/^[a-fA-F0-9]{128}$/.test(signature)) {
            throw new _nestjs_common__rspack_import_0.UnauthorizedException("Invalid webhook signature");
        }
        const receivedSignature = Buffer.from(signature, "hex");
        // 5. Secure signature comparison
        if (expectedSignature.length !== receivedSignature.length || !(0,crypto__rspack_import_4.timingSafeEqual)(expectedSignature, receivedSignature)) {
            throw new _nestjs_common__rspack_import_0.UnauthorizedException("Invalid webhook signature");
        }
        // 6. Parse verified payload
        let eventData;
        try {
            eventData = JSON.parse(rawBody.toString("utf8"));
        } catch  {
            throw new _nestjs_common__rspack_import_0.BadRequestException("Invalid webhook payload");
        }
        const event = eventData.event;
        // 7. Identify supported events
        if (![
            "payment.captured",
            "payment.failed",
            "order.paid"
        ].includes(event)) {
            return {
                message: "Webhook event ignored",
                event
            };
        }
        const razorpayPayment = eventData.payload?.payment?.entity;
        if (!razorpayPayment?.id || !razorpayPayment?.order_id) {
            throw new _nestjs_common__rspack_import_0.BadRequestException("Invalid Razorpay payment payload");
        }
        // 8. Find payment in database
        const payment = await this.prisma.payment.findFirst({
            where: {
                providerOrderId: razorpayPayment.order_id,
                provider: "RAZORPAY"
            }
        });
        if (!payment) {
            throw new _nestjs_common__rspack_import_0.NotFoundException("Payment record not found");
        }
        // 9. Prevent mismatched payment details
        const expectedAmount = payment.amount.mul(100).toNumber();
        if (razorpayPayment.amount !== expectedAmount || razorpayPayment.currency !== payment.currency) {
            throw new _nestjs_common__rspack_import_0.BadRequestException("Webhook payment details do not match");
        }
        // 10. Handle successful payment
        if (event === "payment.captured" || event === "order.paid") {
            if (payment.status === "CAPTURED" || payment.status === "REFUNDED" || payment.status === "PARTIALLY_REFUNDED") {
                return {
                    message: "Payment already processed",
                    paymentId: payment.id,
                    status: payment.status
                };
            }
            await this.prisma.$transaction(async (tx)=>{
                await tx.payment.update({
                    where: {
                        id: payment.id
                    },
                    data: {
                        providerPaymentId: razorpayPayment.id,
                        status: "CAPTURED",
                        paymentMethod: razorpayPayment.method,
                        paidAt: new Date()
                    }
                });
                // Update order status to CONFIRMED after successful payment
                await tx.order.update({
                    where: {
                        id: payment.orderId
                    },
                    data: {
                        status: "CONFIRMED"
                    }
                });
            });
            return {
                message: "Payment captured successfully",
                paymentId: payment.id,
                orderId: payment.orderId,
                status: "CAPTURED"
            };
        }
        // 11. Handle failed payment
        if (event === "payment.failed") {
            if (payment.status === "CAPTURED" || payment.status === "REFUNDED" || payment.status === "PARTIALLY_REFUNDED") {
                return {
                    message: "Payment already completed; failure event ignored",
                    paymentId: payment.id,
                    status: payment.status
                };
            }
            await this.prisma.payment.update({
                where: {
                    id: payment.id
                },
                data: {
                    providerPaymentId: razorpayPayment.id,
                    status: "FAILED",
                    failureReason: razorpayPayment.error_description || "Payment failed"
                }
            });
            return {
                message: "Payment failure recorded",
                paymentId: payment.id,
                status: "FAILED"
            };
        }
    }
    constructor(prisma, razorpayGateway, configService){
        _define_property(this, "prisma", void 0);
        _define_property(this, "razorpayGateway", void 0);
        _define_property(this, "configService", void 0);
        this.prisma = prisma;
        this.razorpayGateway = razorpayGateway;
        this.configService = configService;
    }
}
PaymentsService = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prisma_prisma_service_js__rspack_import_2.PrismaService === "undefined" ? Object : _prisma_prisma_service_js__rspack_import_2.PrismaService,
        typeof _gateways_razorpay_gateway_js__rspack_import_3.RazorpayGateway === "undefined" ? Object : _gateways_razorpay_gateway_js__rspack_import_3.RazorpayGateway,
        typeof _nestjs_config__rspack_import_1.ConfigService === "undefined" ? Object : _nestjs_config__rspack_import_1.ConfigService
    ])
], PaymentsService);


},
28(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrismaModule: () => (PrismaModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _prisma_service_js__rspack_import_1 = __webpack_require__(18);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}


class PrismaModule {
}
PrismaModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Global)(),
    (0,_nestjs_common__rspack_import_0.Module)({
        providers: [
            _prisma_service_js__rspack_import_1.PrismaService
        ],
        exports: [
            _prisma_service_js__rspack_import_1.PrismaService
        ]
    })
], PrismaModule);


},
18(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrismaService: () => (PrismaService)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _prisma_adapter_pg__rspack_import_1 = __webpack_require__(19);
/* import */ var _generated_prisma_client_js__rspack_import_2 = __webpack_require__(20);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}



class PrismaService extends _generated_prisma_client_js__rspack_import_2.PrismaClient {
    async onModuleInit() {
        await this.$connect();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
    constructor(){
        const adapter = new _prisma_adapter_pg__rspack_import_1.PrismaPg({
            connectionString: process.env.DATABASE_URL
        });
        super({
            adapter
        });
    }
}
PrismaService = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [])
], PrismaService);


},
43(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CreateProductDto: () => (CreateProductDto)
});
/* import */ var class_validator__rspack_import_0 = __webpack_require__(36);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}

class CreateProductDto {
    constructor(){
        _define_property(this, "sku", void 0);
        _define_property(this, "name", void 0);
        _define_property(this, "description", void 0);
        _define_property(this, "price", void 0);
        _define_property(this, "stock", void 0);
        _define_property(this, "brand", void 0);
        _define_property(this, "imageUrl", void 0);
        _define_property(this, "categoryId", void 0);
    }
}
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.IsNotEmpty)(),
    _ts_metadata("design:type", String)
], CreateProductDto.prototype, "sku", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.IsNotEmpty)(),
    _ts_metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsOptional)(),
    (0,class_validator__rspack_import_0.IsString)(),
    _ts_metadata("design:type", String)
], CreateProductDto.prototype, "description", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsNumber)({
        maxDecimalPlaces: 2
    }),
    (0,class_validator__rspack_import_0.IsPositive)(),
    _ts_metadata("design:type", Number)
], CreateProductDto.prototype, "price", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsOptional)(),
    (0,class_validator__rspack_import_0.IsInt)(),
    (0,class_validator__rspack_import_0.Min)(0),
    _ts_metadata("design:type", Number)
], CreateProductDto.prototype, "stock", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsOptional)(),
    (0,class_validator__rspack_import_0.IsString)(),
    _ts_metadata("design:type", String)
], CreateProductDto.prototype, "brand", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsOptional)(),
    (0,class_validator__rspack_import_0.IsUrl)(),
    _ts_metadata("design:type", String)
], CreateProductDto.prototype, "imageUrl", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsUUID)(),
    (0,class_validator__rspack_import_0.IsNotEmpty)(),
    _ts_metadata("design:type", String)
], CreateProductDto.prototype, "categoryId", void 0);


},
45(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ProductQueryDto: () => (ProductQueryDto)
});
/* import */ var class_transformer__rspack_import_0 = __webpack_require__(38);
/* import */ var class_validator__rspack_import_1 = __webpack_require__(36);
/* import */ var _libs_shared_src_dto_pagination_dto_js__rspack_import_2 = __webpack_require__(37);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}



class ProductQueryDto extends _libs_shared_src_dto_pagination_dto_js__rspack_import_2.PaginationDto {
    constructor(...args){
        super(...args), _define_property(this, "search", void 0), _define_property(this, "categoryId", void 0), _define_property(this, "brand", void 0), _define_property(this, "minPrice", void 0), _define_property(this, "maxPrice", void 0), _define_property(this, "sortBy", void 0), _define_property(this, "sortOrder", void 0);
    }
}
_ts_decorate([
    (0,class_validator__rspack_import_1.IsOptional)(),
    (0,class_validator__rspack_import_1.IsString)(),
    _ts_metadata("design:type", String)
], ProductQueryDto.prototype, "search", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_1.IsOptional)(),
    (0,class_validator__rspack_import_1.IsString)(),
    _ts_metadata("design:type", String)
], ProductQueryDto.prototype, "categoryId", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_1.IsOptional)(),
    (0,class_validator__rspack_import_1.IsString)(),
    _ts_metadata("design:type", String)
], ProductQueryDto.prototype, "brand", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_1.IsOptional)(),
    (0,class_transformer__rspack_import_0.Type)(()=>Number),
    (0,class_validator__rspack_import_1.IsNumber)(),
    (0,class_validator__rspack_import_1.Min)(0),
    _ts_metadata("design:type", Number)
], ProductQueryDto.prototype, "minPrice", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_1.IsOptional)(),
    (0,class_transformer__rspack_import_0.Type)(()=>Number),
    (0,class_validator__rspack_import_1.IsNumber)(),
    (0,class_validator__rspack_import_1.Min)(0),
    _ts_metadata("design:type", Number)
], ProductQueryDto.prototype, "maxPrice", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_1.IsOptional)(),
    (0,class_validator__rspack_import_1.IsIn)([
        'name',
        'price',
        'createdAt'
    ]),
    _ts_metadata("design:type", String)
], ProductQueryDto.prototype, "sortBy", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_1.IsOptional)(),
    (0,class_validator__rspack_import_1.IsIn)([
        'asc',
        'desc'
    ]),
    _ts_metadata("design:type", String)
], ProductQueryDto.prototype, "sortOrder", void 0);


},
44(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UpdateProductDto: () => (UpdateProductDto)
});
/* import */ var _nestjs_mapped_types__rspack_import_0 = __webpack_require__(34);
/* import */ var _create_product_dto_js__rspack_import_1 = __webpack_require__(43);


class UpdateProductDto extends (0,_nestjs_mapped_types__rspack_import_0.PartialType)(_create_product_dto_js__rspack_import_1.CreateProductDto) {
}


},
42(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ProductsController: () => (ProductsController)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _products_service_js__rspack_import_1 = __webpack_require__(40);
/* import */ var _dto_create_product_dto_js__rspack_import_2 = __webpack_require__(43);
/* import */ var _dto_update_product_dto_js__rspack_import_3 = __webpack_require__(44);
/* import */ var _dto_product_query_dto_js__rspack_import_4 = __webpack_require__(45);
/* import */ var _nestjs_swagger__rspack_import_5 = __webpack_require__(31);
/* import */ var _shared_shared_guards_auth_guard_js__rspack_import_6 = __webpack_require__(12);
/* import */ var _shared_shared_guards_roles_guard_js__rspack_import_7 = __webpack_require__(32);
/* import */ var _shared_shared_decorators_roles_decorator_js__rspack_import_8 = __webpack_require__(11);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}









class ProductsController {
    findAll(query) {
        return this.productsService.findAll(query);
    }
    findAllForAdmin(query) {
        return this.productsService.findAll(query, true);
    }
    findOne(id) {
        return this.productsService.findOne(id);
    }
    create(body) {
        return this.productsService.create(body);
    }
    update(id, body) {
        return this.productsService.update(id, body);
    }
    remove(id) {
        return this.productsService.remove(id);
    }
    restore(id, body) {
        return this.productsService.restore(id, body);
    }
    constructor(productsService){
        _define_property(this, "productsService", void 0);
        this.productsService = productsService;
    }
}
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Get)(),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dto_product_query_dto_js__rspack_import_4.ProductQueryDto === "undefined" ? Object : _dto_product_query_dto_js__rspack_import_4.ProductQueryDto
    ]),
    _ts_metadata("design:returntype", void 0)
], ProductsController.prototype, "findAll", null);
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_5.ApiBearerAuth)(),
    (0,_nestjs_common__rspack_import_0.UseGuards)(_shared_shared_guards_auth_guard_js__rspack_import_6.AuthGuard, _shared_shared_guards_roles_guard_js__rspack_import_7.RolesGuard),
    (0,_shared_shared_decorators_roles_decorator_js__rspack_import_8.Roles)("ADMIN"),
    (0,_nestjs_common__rspack_import_0.Get)("admin/list"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dto_product_query_dto_js__rspack_import_4.ProductQueryDto === "undefined" ? Object : _dto_product_query_dto_js__rspack_import_4.ProductQueryDto
    ]),
    _ts_metadata("design:returntype", void 0)
], ProductsController.prototype, "findAllForAdmin", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Get)(":id"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Param)("id", _nestjs_common__rspack_import_0.ParseUUIDPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], ProductsController.prototype, "findOne", null);
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_5.ApiBearerAuth)(),
    (0,_nestjs_common__rspack_import_0.UseGuards)(_shared_shared_guards_auth_guard_js__rspack_import_6.AuthGuard, _shared_shared_guards_roles_guard_js__rspack_import_7.RolesGuard),
    (0,_shared_shared_decorators_roles_decorator_js__rspack_import_8.Roles)("ADMIN"),
    (0,_nestjs_common__rspack_import_0.Post)(),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dto_create_product_dto_js__rspack_import_2.CreateProductDto === "undefined" ? Object : _dto_create_product_dto_js__rspack_import_2.CreateProductDto
    ]),
    _ts_metadata("design:returntype", void 0)
], ProductsController.prototype, "create", null);
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_5.ApiBearerAuth)(),
    (0,_nestjs_common__rspack_import_0.UseGuards)(_shared_shared_guards_auth_guard_js__rspack_import_6.AuthGuard, _shared_shared_guards_roles_guard_js__rspack_import_7.RolesGuard),
    (0,_shared_shared_decorators_roles_decorator_js__rspack_import_8.Roles)("ADMIN"),
    (0,_nestjs_common__rspack_import_0.Patch)(":id"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Param)("id")),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _dto_update_product_dto_js__rspack_import_3.UpdateProductDto === "undefined" ? Object : _dto_update_product_dto_js__rspack_import_3.UpdateProductDto
    ]),
    _ts_metadata("design:returntype", void 0)
], ProductsController.prototype, "update", null);
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_5.ApiBearerAuth)(),
    (0,_nestjs_common__rspack_import_0.UseGuards)(_shared_shared_guards_auth_guard_js__rspack_import_6.AuthGuard, _shared_shared_guards_roles_guard_js__rspack_import_7.RolesGuard),
    (0,_shared_shared_decorators_roles_decorator_js__rspack_import_8.Roles)("ADMIN"),
    (0,_nestjs_common__rspack_import_0.Delete)(":id"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Param)("id")),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], ProductsController.prototype, "remove", null);
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_5.ApiBearerAuth)(),
    (0,_nestjs_common__rspack_import_0.UseGuards)(_shared_shared_guards_auth_guard_js__rspack_import_6.AuthGuard, _shared_shared_guards_roles_guard_js__rspack_import_7.RolesGuard),
    (0,_shared_shared_decorators_roles_decorator_js__rspack_import_8.Roles)("ADMIN"),
    (0,_nestjs_common__rspack_import_0.Patch)(":id/restore"),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Param)("id")),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof RestoreProductBody === "undefined" ? Object : RestoreProductBody
    ]),
    _ts_metadata("design:returntype", void 0)
], ProductsController.prototype, "restore", null);
ProductsController = _ts_decorate([
    (0,_nestjs_swagger__rspack_import_5.ApiTags)("Products"),
    (0,_nestjs_common__rspack_import_0.Controller)("products"),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _products_service_js__rspack_import_1.ProductsService === "undefined" ? Object : _products_service_js__rspack_import_1.ProductsService
    ])
], ProductsController);


},
41(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ProductsModule: () => (ProductsModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _products_controller_js__rspack_import_1 = __webpack_require__(42);
/* import */ var _products_service_js__rspack_import_2 = __webpack_require__(40);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}



class ProductsModule {
}
ProductsModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        providers: [
            _products_service_js__rspack_import_2.ProductsService
        ],
        controllers: [
            _products_controller_js__rspack_import_1.ProductsController
        ]
    })
], ProductsModule);


},
40(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ProductsService: () => (ProductsService)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _prisma_prisma_service_js__rspack_import_1 = __webpack_require__(18);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}


class ProductsService {
    async findAll(query = {
        page: 1,
        limit: 10
    }, includeInactive = false) {
        const { page = 1, limit = 10 } = query;
        const skip = (page - 1) * limit;
        _nestjs_common__rspack_import_0.Logger.log(`Fetching products with page: ${page}, limit: ${limit}`, "ProductsService");
        _nestjs_common__rspack_import_0.Logger.log(`Filters applied: ${JSON.stringify(query)}`, "ProductsService");
        const { search, categoryId, brand, minPrice, maxPrice, sortBy = "createdAt", sortOrder = "desc" } = query;
        if (minPrice !== undefined && maxPrice !== undefined && minPrice > maxPrice) {
            throw new _nestjs_common__rspack_import_0.BadRequestException("Minimum price cannot be greater than maximum price.");
        }
        const where = {
            ...!includeInactive && {
                isActive: true
            },
            ...search?.trim() && {
                OR: [
                    {
                        name: {
                            contains: search.trim(),
                            mode: "insensitive"
                        }
                    },
                    {
                        description: {
                            contains: search.trim(),
                            mode: "insensitive"
                        }
                    }
                ]
            },
            ...categoryId && {
                categoryId
            },
            ...brand && {
                brand: {
                    contains: brand,
                    mode: "insensitive"
                }
            },
            ...(minPrice !== undefined || maxPrice !== undefined) && {
                price: {
                    ...minPrice !== undefined && {
                        gte: minPrice
                    },
                    ...maxPrice !== undefined && {
                        lte: maxPrice
                    }
                }
            }
        };
        const [products, count] = await Promise.all([
            this.prisma.product.findMany({
                where,
                skip,
                take: limit,
                include: {
                    category: true
                },
                orderBy: {
                    [sortBy]: sortOrder
                }
            }),
            this.prisma.product.count({
                where
            })
        ]);
        return {
            data: products,
            count,
            total: products.length,
            page,
            page_count: Math.ceil(count / limit)
        };
    }
    async create(body) {
        const name = body.name.trim();
        const sku = body.sku.trim().toUpperCase();
        const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        const existing = await this.prisma.product.findFirst({
            where: {
                OR: [
                    {
                        sku
                    },
                    {
                        slug
                    }
                ]
            }
        });
        if (existing) {
            throw new _nestjs_common__rspack_import_0.ConflictException("A product with this SKU or slug already exists.");
        }
        const category = await this.prisma.category.findUnique({
            where: {
                id: body.categoryId
            }
        });
        if (!category) {
            throw new _nestjs_common__rspack_import_0.NotFoundException("Category not found.");
        }
        return this.prisma.product.create({
            data: {
                sku,
                name,
                slug,
                description: body.description,
                price: body.price,
                stock: body.stock ?? 0,
                brand: body.brand,
                imageUrl: body.imageUrl,
                categoryId: body.categoryId
            },
            include: {
                category: true
            }
        });
    }
    async findOne(id) {
        const product = await this.prisma.product.findUnique({
            where: {
                id
            },
            include: {
                category: true
            }
        });
        if (!product) {
            throw new _nestjs_common__rspack_import_0.NotFoundException("Product not found.");
        }
        return product;
    }
    async update(id, body) {
        const product = await this.prisma.product.findUnique({
            where: {
                id
            }
        });
        if (!product) {
            throw new _nestjs_common__rspack_import_0.NotFoundException("Product not found.");
        }
        const name = body.name?.trim();
        const sku = body.sku?.trim().toUpperCase();
        const slug = name ? name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") : undefined;
        const existing = await this.prisma.product.findFirst({
            where: {
                id: {
                    not: id
                },
                OR: [
                    ...sku ? [
                        {
                            sku
                        }
                    ] : [],
                    ...slug ? [
                        {
                            slug
                        }
                    ] : []
                ]
            }
        });
        if (existing) {
            throw new _nestjs_common__rspack_import_0.ConflictException("Another product already uses this SKU or slug.");
        }
        if (body.categoryId) {
            const category = await this.prisma.category.findUnique({
                where: {
                    id: body.categoryId
                }
            });
            if (!category) {
                throw new _nestjs_common__rspack_import_0.NotFoundException("Category not found.");
            }
        }
        return this.prisma.product.update({
            where: {
                id
            },
            data: {
                ...body,
                ...name !== undefined ? {
                    name
                } : {},
                ...sku !== undefined ? {
                    sku
                } : {},
                ...slug !== undefined ? {
                    slug
                } : {}
            },
            include: {
                category: true
            }
        });
    }
    async remove(id) {
        const product = await this.prisma.product.findUnique({
            where: {
                id
            }
        });
        if (!product) {
            throw new _nestjs_common__rspack_import_0.NotFoundException("Product not found.");
        }
        return this.prisma.product.update({
            where: {
                id
            },
            data: {
                isActive: false
            },
            include: {
                category: true
            }
        });
    }
    async restore(id, data) {
        const product = await this.prisma.product.findUnique({
            where: {
                id
            }
        });
        if (!product) {
            throw new _nestjs_common__rspack_import_0.NotFoundException("Product not found.");
        }
        return this.prisma.product.update({
            where: {
                id
            },
            data,
            include: {
                category: true
            }
        });
    }
    constructor(prisma){
        _define_property(this, "prisma", void 0);
        this.prisma = prisma;
    }
}
ProductsService = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prisma_prisma_service_js__rspack_import_1.PrismaService === "undefined" ? Object : _prisma_prisma_service_js__rspack_import_1.PrismaService
    ])
], ProductsService);


},
84(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  StatsController: () => (StatsController)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _nestjs_swagger__rspack_import_1 = __webpack_require__(31);
/* import */ var _shared_shared_guards_auth_guard_js__rspack_import_2 = __webpack_require__(12);
/* import */ var _shared_shared_guards_roles_guard_js__rspack_import_3 = __webpack_require__(32);
/* import */ var _shared_shared_decorators_roles_decorator_js__rspack_import_4 = __webpack_require__(11);
/* import */ var _shared_shared_decorators_response_message_decorator_js__rspack_import_5 = __webpack_require__(8);
/* import */ var _stats_service_js__rspack_import_6 = __webpack_require__(85);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}







class StatsController {
    getOverview() {
        return this.statsService.getOverview();
    }
    constructor(statsService){
        _define_property(this, "statsService", void 0);
        this.statsService = statsService;
    }
}
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Get)(),
    (0,_shared_shared_decorators_response_message_decorator_js__rspack_import_5.ResponseMessage)("Stats retrieved successfully"),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", void 0)
], StatsController.prototype, "getOverview", null);
StatsController = _ts_decorate([
    (0,_nestjs_swagger__rspack_import_1.ApiTags)("Admin"),
    (0,_nestjs_swagger__rspack_import_1.ApiBearerAuth)(),
    (0,_nestjs_common__rspack_import_0.Controller)("admin/stats"),
    (0,_nestjs_common__rspack_import_0.UseGuards)(_shared_shared_guards_auth_guard_js__rspack_import_2.AuthGuard, _shared_shared_guards_roles_guard_js__rspack_import_3.RolesGuard),
    (0,_shared_shared_decorators_roles_decorator_js__rspack_import_4.Roles)("ADMIN"),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _stats_service_js__rspack_import_6.StatsService === "undefined" ? Object : _stats_service_js__rspack_import_6.StatsService
    ])
], StatsController);


},
83(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  StatsModule: () => (StatsModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _prisma_prisma_module_js__rspack_import_1 = __webpack_require__(28);
/* import */ var _stats_controller_js__rspack_import_2 = __webpack_require__(84);
/* import */ var _stats_service_js__rspack_import_3 = __webpack_require__(85);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}




class StatsModule {
}
StatsModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        imports: [
            _prisma_prisma_module_js__rspack_import_1.PrismaModule
        ],
        controllers: [
            _stats_controller_js__rspack_import_2.StatsController
        ],
        providers: [
            _stats_service_js__rspack_import_3.StatsService
        ]
    })
], StatsModule);


},
85(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  StatsService: () => (StatsService)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _prisma_prisma_service_js__rspack_import_1 = __webpack_require__(18);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}


const LOW_STOCK_THRESHOLD = 5;
class StatsService {
    async getOverview() {
        const startOfToday = new Date();
        startOfToday.setHours(0, 0, 0, 0);
        const [totalOrders, ordersToday, statusGroups, revenue, activeProducts, lowStockCount, lowStockProducts, customers] = await Promise.all([
            this.prisma.order.count(),
            this.prisma.order.count({
                where: {
                    createdAt: {
                        gte: startOfToday
                    }
                }
            }),
            this.prisma.order.groupBy({
                by: [
                    "status"
                ],
                _count: {
                    _all: true
                }
            }),
            this.prisma.payment.aggregate({
                where: {
                    status: "CAPTURED"
                },
                _sum: {
                    amount: true
                }
            }),
            this.prisma.product.count({
                where: {
                    isActive: true
                }
            }),
            this.prisma.product.count({
                where: {
                    isActive: true,
                    stock: {
                        lte: LOW_STOCK_THRESHOLD
                    }
                }
            }),
            this.prisma.product.findMany({
                where: {
                    isActive: true,
                    stock: {
                        lte: LOW_STOCK_THRESHOLD
                    }
                },
                orderBy: {
                    stock: "asc"
                },
                take: 5,
                select: {
                    id: true,
                    name: true,
                    sku: true,
                    stock: true
                }
            }),
            this.prisma.user.count({
                where: {
                    role: "CUSTOMER"
                }
            })
        ]);
        const ordersByStatus = {};
        for (const group of statusGroups){
            ordersByStatus[group.status] = group._count._all;
        }
        return {
            orders: {
                total: totalOrders,
                today: ordersToday,
                byStatus: ordersByStatus
            },
            revenue: (revenue._sum.amount ?? 0).toString(),
            products: {
                active: activeProducts,
                lowStockThreshold: LOW_STOCK_THRESHOLD,
                lowStockCount,
                lowStock: lowStockProducts
            },
            customers
        };
    }
    constructor(prisma){
        _define_property(this, "prisma", void 0);
        this.prisma = prisma;
    }
}
StatsService = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prisma_prisma_service_js__rspack_import_1.PrismaService === "undefined" ? Object : _prisma_prisma_service_js__rspack_import_1.PrismaService
    ])
], StatsService);


},
49(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CreateUserDto: () => (CreateUserDto)
});
/* import */ var class_validator__rspack_import_0 = __webpack_require__(36);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}

class CreateUserDto {
    constructor(){
        _define_property(this, "firstName", void 0);
        _define_property(this, "lastName", void 0);
        _define_property(this, "email", void 0);
        _define_property(this, "password", void 0);
        _define_property(this, "phone", void 0);
    }
}
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.IsNotEmpty)(),
    _ts_metadata("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.IsNotEmpty)(),
    _ts_metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsEmail)(),
    _ts_metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsString)(),
    (0,class_validator__rspack_import_0.MinLength)(8),
    _ts_metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsOptional)(),
    (0,class_validator__rspack_import_0.IsString)(),
    _ts_metadata("design:type", String)
], CreateUserDto.prototype, "phone", void 0);


},
51(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UpdateUserRoleDto: () => (UpdateUserRoleDto)
});
/* import */ var class_validator__rspack_import_0 = __webpack_require__(36);
/* import */ var _nestjs_mapped_types__rspack_import_1 = __webpack_require__(34);
/* import */ var _create_user_dto_js__rspack_import_2 = __webpack_require__(49);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}



class UpdateUserRoleDto extends (0,_nestjs_mapped_types__rspack_import_1.PartialType)(_create_user_dto_js__rspack_import_2.CreateUserDto) {
    constructor(...args){
        super(...args), _define_property(this, "role", void 0), _define_property(this, "isActive", void 0);
    }
}
_ts_decorate([
    (0,class_validator__rspack_import_0.IsOptional)(),
    (0,class_validator__rspack_import_0.IsIn)([
        'CUSTOMER',
        'ADMIN'
    ]),
    _ts_metadata("design:type", String)
], UpdateUserRoleDto.prototype, "role", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsOptional)(),
    (0,class_validator__rspack_import_0.IsIn)([
        true,
        false
    ]),
    _ts_metadata("design:type", Boolean)
], UpdateUserRoleDto.prototype, "isActive", void 0);


},
50(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UserQueryDto: () => (UserQueryDto)
});
/* import */ var class_validator__rspack_import_0 = __webpack_require__(36);
/* import */ var _libs_shared_src_dto_pagination_dto_js__rspack_import_1 = __webpack_require__(37);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}


class UserQueryDto extends _libs_shared_src_dto_pagination_dto_js__rspack_import_1.PaginationDto {
    constructor(...args){
        super(...args), _define_property(this, "search", void 0), _define_property(this, "role", void 0), _define_property(this, "isActive", void 0), _define_property(this, "email", void 0), _define_property(this, "sortBy", void 0), _define_property(this, "sortOrder", void 0);
    }
}
_ts_decorate([
    (0,class_validator__rspack_import_0.IsOptional)(),
    (0,class_validator__rspack_import_0.IsString)(),
    _ts_metadata("design:type", String)
], UserQueryDto.prototype, "search", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsOptional)(),
    (0,class_validator__rspack_import_0.IsString)(),
    _ts_metadata("design:type", String)
], UserQueryDto.prototype, "role", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsOptional)(),
    (0,class_validator__rspack_import_0.IsIn)([
        true,
        false
    ]),
    _ts_metadata("design:type", Boolean)
], UserQueryDto.prototype, "isActive", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsOptional)(),
    (0,class_validator__rspack_import_0.IsString)(),
    _ts_metadata("design:type", String)
], UserQueryDto.prototype, "email", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsOptional)(),
    (0,class_validator__rspack_import_0.IsIn)([
        'firstName',
        'lastName',
        'email',
        'createdAt'
    ]),
    _ts_metadata("design:type", String)
], UserQueryDto.prototype, "sortBy", void 0);
_ts_decorate([
    (0,class_validator__rspack_import_0.IsOptional)(),
    (0,class_validator__rspack_import_0.IsIn)([
        'asc',
        'desc'
    ]),
    _ts_metadata("design:type", String)
], UserQueryDto.prototype, "sortOrder", void 0);


},
48(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UsersController: () => (UsersController)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _shared_shared_guards_auth_guard_js__rspack_import_1 = __webpack_require__(12);
/* import */ var _shared_shared_guards_roles_guard_js__rspack_import_2 = __webpack_require__(32);
/* import */ var _shared_shared_decorators_roles_decorator_js__rspack_import_3 = __webpack_require__(11);
/* import */ var _users_service_js__rspack_import_4 = __webpack_require__(46);
/* import */ var _dto_create_user_dto_js__rspack_import_5 = __webpack_require__(49);
/* import */ var _dto_user_query_dto_js__rspack_import_6 = __webpack_require__(50);
/* import */ var _dto_update_user_dto_js__rspack_import_7 = __webpack_require__(51);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}








class UsersController {
    create(createUserDto) {
        return this.usersService.create(createUserDto);
    }
    findAll(query) {
        return this.usersService.findAll(query);
    }
    findOne(id) {
        return this.usersService.findOne(id);
    }
    update(id, updateUserDto) {
        return this.usersService.update(id, updateUserDto);
    }
    constructor(usersService){
        _define_property(this, "usersService", void 0);
        this.usersService = usersService;
    }
}
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Post)(),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dto_create_user_dto_js__rspack_import_5.CreateUserDto === "undefined" ? Object : _dto_create_user_dto_js__rspack_import_5.CreateUserDto
    ]),
    _ts_metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.UseGuards)(_shared_shared_guards_auth_guard_js__rspack_import_1.AuthGuard, _shared_shared_guards_roles_guard_js__rspack_import_2.RolesGuard),
    (0,_shared_shared_decorators_roles_decorator_js__rspack_import_3.Roles)('ADMIN'),
    (0,_nestjs_common__rspack_import_0.Get)(),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dto_user_query_dto_js__rspack_import_6.UserQueryDto === "undefined" ? Object : _dto_user_query_dto_js__rspack_import_6.UserQueryDto
    ]),
    _ts_metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.UseGuards)(_shared_shared_guards_auth_guard_js__rspack_import_1.AuthGuard, _shared_shared_guards_roles_guard_js__rspack_import_2.RolesGuard),
    (0,_shared_shared_decorators_roles_decorator_js__rspack_import_3.Roles)('ADMIN'),
    (0,_nestjs_common__rspack_import_0.Get)(':id'),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Param)('id', _nestjs_common__rspack_import_0.ParseUUIDPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], UsersController.prototype, "findOne", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.UseGuards)(_shared_shared_guards_auth_guard_js__rspack_import_1.AuthGuard, _shared_shared_guards_roles_guard_js__rspack_import_2.RolesGuard),
    (0,_shared_shared_decorators_roles_decorator_js__rspack_import_3.Roles)('ADMIN'),
    (0,_nestjs_common__rspack_import_0.Patch)(':id'),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Param)('id')),
    _ts_param(1, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _dto_update_user_dto_js__rspack_import_7.UpdateUserRoleDto === "undefined" ? Object : _dto_update_user_dto_js__rspack_import_7.UpdateUserRoleDto
    ]),
    _ts_metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
UsersController = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Controller)('users'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _users_service_js__rspack_import_4.UsersService === "undefined" ? Object : _users_service_js__rspack_import_4.UsersService
    ])
], UsersController);


},
52(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UsersModule: () => (UsersModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var _users_controller_js__rspack_import_1 = __webpack_require__(48);
/* import */ var _users_service_js__rspack_import_2 = __webpack_require__(46);
/* import */ var _prisma_prisma_module_js__rspack_import_3 = __webpack_require__(28);
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}




class UsersModule {
}
UsersModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        imports: [
            _prisma_prisma_module_js__rspack_import_3.PrismaModule
        ],
        controllers: [
            _users_controller_js__rspack_import_1.UsersController
        ],
        providers: [
            _users_service_js__rspack_import_2.UsersService
        ],
        exports: [
            _users_service_js__rspack_import_2.UsersService
        ]
    })
], UsersModule);


},
46(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UsersService: () => (UsersService)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__(3);
/* import */ var bcrypt__rspack_import_1 = __webpack_require__(47);
/* import */ var _prisma_prisma_service_js__rspack_import_2 = __webpack_require__(18);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}



class UsersService {
    async findByEmail(email) {
        return this.prisma.user.findUnique({
            where: {
                email: email.trim().toLowerCase()
            }
        });
    }
    async create(createUserDto) {
        const { firstName, lastName, email, password, phone } = createUserDto;
        const normalizedEmail = email.trim().toLowerCase();
        // Check whether email already exists
        const existingUser = await this.prisma.user.findUnique({
            where: {
                email: normalizedEmail
            }
        });
        if (existingUser) {
            throw new _nestjs_common__rspack_import_0.ConflictException("Email already registered");
        }
        // Check whether phone already exists
        if (phone) {
            const existingPhone = await this.prisma.user.findUnique({
                where: {
                    phone
                }
            });
            if (existingPhone) {
                throw new _nestjs_common__rspack_import_0.ConflictException("Phone number already registered");
            }
        }
        // Hash password
        const hashedPassword = await bcrypt__rspack_import_1.hash(password, 12);
        // Save user in database
        const user = await this.prisma.user.create({
            data: {
                firstName,
                lastName,
                email: normalizedEmail,
                password: hashedPassword,
                phone
            }
        });
        // Never return password
        const { password: _, ...result } = user;
        return result;
    }
    async findAll(query = {
        page: 1,
        limit: 10
    }) {
        const { page = 1, limit = 10, search, role, isActive, email } = query;
        const skip = (page - 1) * limit;
        const where = {};
        if (search) {
            where.OR = [
                {
                    firstName: {
                        contains: search,
                        mode: "insensitive"
                    }
                },
                {
                    lastName: {
                        contains: search,
                        mode: "insensitive"
                    }
                },
                {
                    email: {
                        contains: search,
                        mode: "insensitive"
                    }
                }
            ];
        }
        if (role) {
            where.role = role;
        }
        if (isActive !== undefined) {
            where.isActive = isActive === true;
        }
        if (email) {
            where.email = {
                contains: email,
                mode: "insensitive"
            };
        }
        const [users, count] = await Promise.all([
            this.prisma.user.findMany({
                where,
                skip,
                take: limit,
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true,
                    phone: true,
                    role: true,
                    isActive: true,
                    createdAt: true,
                    updatedAt: true
                },
                orderBy: {
                    createdAt: "desc"
                }
            }),
            this.prisma.user.count({
                where
            })
        ]);
        return {
            data: users,
            count,
            total: users.length,
            page,
            page_count: Math.ceil(count / limit)
        };
    }
    async findOne(id) {
        const user = await this.prisma.user.findUnique({
            where: {
                id
            }
        });
        if (!user) {
            throw new _nestjs_common__rspack_import_0.NotFoundException("User not found");
        }
        const { password: _, ...result } = user;
        return result;
    }
    async update(id, updateUserDto) {
        const { firstName, lastName, email, phone, role, isActive } = updateUserDto;
        const normalizedEmail = email?.trim().toLowerCase();
        // Check whether email already exists
        if (normalizedEmail) {
            const existingUser = await this.prisma.user.findUnique({
                where: {
                    email: normalizedEmail
                }
            });
            if (existingUser && existingUser.id !== id) {
                throw new _nestjs_common__rspack_import_0.ConflictException("Email already registered");
            }
        }
        // Check whether phone already exists
        if (phone) {
            const existingPhone = await this.prisma.user.findUnique({
                where: {
                    phone
                }
            });
            if (existingPhone && existingPhone.id !== id) {
                throw new _nestjs_common__rspack_import_0.ConflictException("Phone number already registered");
            }
        }
        const user = await this.prisma.user.update({
            where: {
                id
            },
            data: {
                firstName,
                lastName,
                email: normalizedEmail,
                phone,
                role,
                isActive
            }
        });
        const { password: _, ...result } = user;
        return result;
    }
    async updatePasswordResetToken(userId, hashedToken, expiresAt) {
        return this.prisma.user.update({
            where: {
                id: userId
            },
            data: {
                passwordResetTokenHash: hashedToken,
                passwordResetExpiresAt: expiresAt
            }
        });
    }
    constructor(prisma){
        _define_property(this, "prisma", void 0);
        this.prisma = prisma;
    }
}
UsersService = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prisma_prisma_service_js__rspack_import_2.PrismaService === "undefined" ? Object : _prisma_prisma_service_js__rspack_import_2.PrismaService
    ])
], UsersService);


},

});
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

// expose the modules object (__webpack_modules__)
__webpack_require__.m = __webpack_modules__;

// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, getters, values) => {
	var define = (defs, kind) => {
		for(var key in defs) {
			if(__webpack_require__.o(defs, key) && !__webpack_require__.o(exports, key)) {
				Object.defineProperty(exports, key, { enumerable: true, [kind]: defs[key] });
			}
		}
	};
	define(getters, "get");
	define(values, "value");
};
})();
// webpack/runtime/ensure_chunk
(() => {
__webpack_require__.f = {};
// This file contains only the entry chunk.
// The chunk loading function for additional chunks
__webpack_require__.e = (chunkId) => {
	return Promise.all(
		Object.keys(__webpack_require__.f).reduce((promises, key) => {
			__webpack_require__.f[key](chunkId, promises);
			return promises;
		}, [])
	);
};
})();
// webpack/runtime/get javascript chunk filename
(() => {
// This function allow to reference chunks
__webpack_require__.u = (chunkId) => {
  // return url for filenames not based on template
  
  // return url for filenames based on template
  return "" + chunkId + ".main.js"
}
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
})();
// webpack/runtime/module_chunk_loading
(() => {
// no BaseURI
      // object to store loaded and loading chunks
      // undefined = chunk not loaded, null = chunk preloaded/prefetched
      // [resolve, Promise] = chunk loading, 0 = chunk loaded
      var moduleInstalledChunks = {3: 0,};
      var moduleInstallChunk = (data) => {
    var __rspack_esm_ids = data.__rspack_esm_ids;
    var moreModules = data.__webpack_modules__;
    var __rspack_esm_runtime = data.__rspack_esm_runtime;
    // add "modules" to the modules object,
    // then flag all "ids" as loaded and fire callback
    var moduleId, chunkId, i = 0;
    for (moduleId in moreModules) {
        if (__webpack_require__.o(moreModules, moduleId)) {
            __webpack_require__.m[moduleId] = moreModules[moduleId];
        }
    }
    if (__rspack_esm_runtime) __rspack_esm_runtime(__webpack_require__);
    for (; i < __rspack_esm_ids.length; i++) {
        chunkId = __rspack_esm_ids[i];
        if (__webpack_require__.o(moduleInstalledChunks, chunkId) && moduleInstalledChunks[chunkId]) {
            moduleInstalledChunks[chunkId][0]();
        }
        moduleInstalledChunks[__rspack_esm_ids[i]] = 0;
    }
    
};

        __webpack_require__.f.j = function (chunkId, promises) {
          // import() chunk loading for javascript
var installedChunkData = __webpack_require__.o(moduleInstalledChunks, chunkId) ? moduleInstalledChunks[chunkId] : undefined;
if (installedChunkData !== 0) { // 0 means "already installed".'
    // a Promise means "currently loading".
    if (installedChunkData) {
        promises.push(installedChunkData[1]);
    } else {
        if (true) {
            // setup Promise in chunk cache
            var promise = import("./" + __webpack_require__.u(chunkId)).then(moduleInstallChunk, (e) => {
                if (moduleInstalledChunks[chunkId] !== 0) moduleInstalledChunks[chunkId] = undefined;
                throw e;
            });
            var promise = Promise.race([promise, new Promise((resolve) => {
                installedChunkData = moduleInstalledChunks[chunkId] = [resolve];
            })]);
            promises.push(installedChunkData[1] = promise);
        }
        
    }
}

        }
        // no external install chunk
// no on chunks loaded
// no HMR
// no HMR manifest

})();
// module factories are used so entry inlining is disabled
// startup
// Load entry module and return exports
var __webpack_exports__ = __webpack_require__(0);

//# sourceMappingURL=main.js.map