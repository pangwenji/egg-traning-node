module.exports = appInfo => {

	const config = exports = {};

	config.keys = appInfo.name + '_1565179334708_8215';

	config.middleware = [];
	//app.mysql.query();
	const userConfig = {
	
		multipart: {
			mode: 'file',//文件类型
			fileSize: '500mb',
			// whilelist:['.apk']
			fileExtensions:['.apk']
		},
		  security: {
				csrf: {
					enable:false
				},
			domainWhiteList: ['http://127.0.0.1:8000'],
		},
    
		cors: {
			credentials: true
		},
		JWT_SECRET: 'pangwenji',
		mysql: {
			client: {
				host: 'localhost',
				port: 3306,
				user: 'root',
				password: 'root',
				database: 'cms'
			}
		}
	};

	return {
		...config,
		...userConfig,
	};
};

