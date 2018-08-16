QUnit.test( "Utils.compareUrlDomain Test", function( assert ) {
    assert.ok(Utils.compareUrlDomain('https://www.scitation.org', 'https://www.scitation.org'), "Expect True with Exact Same Url" );
    assert.ok(!Utils.compareUrlDomain('https://www.scitation.org', 'http://www.scitation.org'), "Expect False with Different Protocol Url" );
    assert.ok(!Utils.compareUrlDomain('https://www.facebook.com', 'https://ieeexplore.ieee.org'), "Expect False with Different Domain Url" );
    assert.ok(Utils.compareUrlDomain('https://www.scitation.org/this/is/a/test', 'https://www.scitation.org'), "Expect True same Url different paths" );
    assert.ok(Utils.compareUrlDomain('https://www.scitation.org', 'https://*.scitation.org'), "Expect True same urls, wildcard(*) for subdomain - no path" );
    assert.ok(Utils.compareUrlDomain('https://somethingelsethatwedontknow.scitation.org/this/is/a/test', 'https://*.scitation.org'), "Expect True same TLD urls, wildcard(*) for subdomain" );
    assert.ok(Utils.compareUrlDomain('https://api.scitation.org/this/is/a/test', 'https://*.scitation.org'), "Expect True same urls, wildcard(*) for subdomain - diff path" );
    assert.ok(!Utils.compareUrlDomain('https://api.scitation1.org/this/is/a/test', 'https://*.scitation.org'), "Expect False diff domain urls, wildcard(*) for subdomain - diff path" );
    assert.ok(!Utils.compareUrlDomain('https://api.scitation.1org/this/is/a/test', 'https://*.scitation.org'), "Expect False diff TLD urls, wildcard(*) for subdomain - diff path" );
    assert.ok(!Utils.compareUrlDomain('https://aip-scitation-org.afit.idm.oclc.org/action/doSearch?appendWebsiteFilter=false&AllField=software', 'https://*.scitation.org'), "Expect False diff diff urls, wildcard(*) for subdomain - diff path" );
});