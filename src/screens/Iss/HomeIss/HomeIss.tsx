import { CountyManager } from '../../../utils/CountyManager';
import LoadingScreen from '../../LoadingScreen/LoadingScreen';
import React, { useCallback, useEffect, useState } from 'react';
import LoginWebViewIss from '../LoginWebViewIss/LoginWebViewIss';
import { Login } from '../../../Types/JsonAutoatendimento/Login';
import { County } from '../../../Types/JsonAutoatendimento/County';
import ActionsEndpoints from '../ActionsEndpoints/ActionsEndpoints';
import { Cookies } from '../../../Types/JsonAutoatendimento/Cookies';
import { CookieManagerUtils } from '../../../utils/CookieManagerUtils';

export function HomeIss(props: any) {

    const { ibgeCode } = props.route.params;
    const [loggedCounty, setLoggedCounty] = useState<County | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<Boolean | null>(null);

    const checkIfIsLoggedIn = useCallback(() => {
        const FindLogin = async () => {
            const countyResult = await CountyManager.GetCountyByIbgeCode(ibgeCode);

            if (countyResult !== null) {

                setLoggedCounty(countyResult);

                const hasAuthCookieForThisUrl = await CookieManagerUtils.CheckIfCookieExistsToThisUrl(
                    countyResult.UrlAplicacao as string
                    , countyResult.Cookies?.CookieAutenticacaoDaAplicacao as string)
                    .then((result) => { return result; })
                    .catch((ex) => { return ex; });

                setIsLoggedIn(hasAuthCookieForThisUrl);
            }
        }

        FindLogin();

    }, [ibgeCode]);

    useEffect(() => { checkIfIsLoggedIn(); }, [checkIfIsLoggedIn]);

    switch (isLoggedIn) {
        case true:
            return (<ActionsEndpoints county={loggedCounty as County} />);
        case false:
            return (<LoginWebViewIss
                jsonAction={{
                    Login: loggedCounty?.Login as Login,
                    Cookies: loggedCounty?.Cookies as Cookies,
                    ibgeCode: ibgeCode
                }} />);
        default:
            return (<LoadingScreen />);
    }
}

export default HomeIss;