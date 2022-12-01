import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'eu-central-1_revPjcIqO',
    ClientId: '26pqlv6cp30qali9mdtlvc20if'
};

export default new CognitoUserPool(poolData);