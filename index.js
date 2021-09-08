function introduction(name) {
    return `Hi, my name is ${name}.`
}

function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional (name, language ="JavaScript"){
    console.log(`Hi, my name is ${'Garcie'} and I am learning to program in ${language}.`);
}

function introductionWithLanguageOptional(name=Garcie, language="JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}



