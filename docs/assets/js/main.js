"use strict";

/**
 * Configs
 */
var configs = (function () {
    var instance;
    var Singleton = function (options) {
        var options = options || Singleton.defaultOptions;
        for (var key in Singleton.defaultOptions) {
            this[key] = options[key] || Singleton.defaultOptions[key];
        }
    };
    Singleton.defaultOptions = {
        general_gethelp: "Below there's a list of commands that you can use.\nYou can use autofill by pressing the TAB key, autocompleting if there's only 1 possibility, or showing you a list of possibilities.",
        ls_gethelp: "List information about the files and folders (the current directory by default).",
        cat_gethelp: "Read FILE(s) content and print it to the standard output (screen).",
        whoami_gethelp: "Print the user name associated with the current effective user ID and more info.",
        date_gethelp: "Print the system date and time.",
        gethelp_gethelp: "Print this menu.",
        clear_gethelp: "Clear the terminal screen.",
        reboot_gethelp: "Reboot the system.",
        cd_gethelp: "Change the current working directory.",
        mv_gethelp: "Move (rename) files.",
        rm_gethelp: "Remove files or directories.",
        rmdir_gethelp: "Remove directory, this command will only work if the folders are empty.",
        touch_gethelp: "Change file timestamps. If the file doesn't exist, it's created an empty one.",
        sudo_gethelp: "Execute a command as the superuser.",
        welcome: `Evan's PowerShell Terminal
        Copyright (C) evandeters.com
        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0.^!?YPGB#&&@@@@@@@@&&#BGPY?!^.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0.^7YP#&@@@&BP55PPGBB##BBGP555GB&@@@&#PY7^.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0.~JG&@@&B5?!^..^75B&&@@@@@@@@&#GY!:\xa0.^!?5B&@@&GJ~.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0^?G&@@B57^.\xa0\xa0\xa0\xa0\xa07G@@@@@@@@@@@@@@@@@@@&P~\xa0\xa0\xa0\xa0\xa0.^75B@@&G?^\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0^JB@@#5!:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa07#@@@@@@@@@@@@@@@@@@@@@@@@G~\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:!5#@@BJ^\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0.7G@@#Y~.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0.P@@@@@@@@@@@@@@@@@@@@@@@@@@@@?\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0.~Y#@@G7.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:J&@@P!\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0P@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@J\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0!P@@&J:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:Y&@&J:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@^\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:J&@&Y:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0.J&@&?.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Y\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0.?&@&J.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0!#@@Y.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0.&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@P\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0.Y@@#!\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
        \xa0\xa0\xa0\xa0\xa0\xa0\xa0.5@@G^\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Y\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0^G@@5.\xa0\xa0\xa0\xa0\xa0\xa0\xa0
        \xa0\xa0\xa0\xa0\xa0\xa0^B@@J\xa0\xa0\xa0.^7JY5PPP5Y?!^.\xa0\xa0\xa0\xa07@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@^\xa0\xa0\xa0\xa0.^!?Y5PP55Y?!^.\xa0\xa0\xa0J@@B^\xa0\xa0\xa0\xa0\xa0\xa0
        \xa0\xa0\xa0\xa0\xa0!&@&~\xa0^JG&@@@@@@@@@@@@@#P?:\xa0\xa05@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@?\xa0\xa0^?G#@@@@@@@@@@@@@#P?:\xa0~&@&!\xa0\xa0\xa0\xa0\xa0
        \xa0\xa0\xa0\xa0!@@B^!B@@@@@@@@@@@@@@@@@@@@@P~\xa0Y@@@@@@@@@@@@@@@@@@@@@@@@@@@&7\xa0!G@@@@@@@@@@@@@@@@@@@@@G~^B@@!\xa0\xa0\xa0\xa0
        \xa0\xa0\xa0~@@B?B@@@@@@@@@@@@@@@@@@@@@@@@@P:~B@@@@@@@@@@@@@@@@@@@@@@@@P:^G@@@@@@@@@@@@@@@@@@@@@@@@@G!B@@~\xa0\xa0\xa0
        \xa0\xa0:&@&P@@@@@@@@@@@@@@@@@@@@@@@@@@@@&~\xa0!P&@@@@@@@@@@@@@@@@@@#Y^\xa07@@@@@@@@@@@@@@@@@@@@@@@@@@@@&Y&@&:\xa0\xa0
        \xa0\xa0G@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@~\xa0\xa0.!YG#&&@@@@@@&&BPJ~\xa0\xa0\xa0!@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&P@@G\xa0\xa0
        \xa07@@B&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B\xa0\xa0J55P?PGGGGGGGG57555J\xa0.#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BG@@7\xa0
        \xa0B@&Y@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@:~@@@@GYBBBBBBBBYG@@@@~~@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@?&@B\xa0
        !@@P?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@~PGGGGB#&@@@@@@&#BGGGG57@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@!P@@!
        P@@!^@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#?@BY#@@@@@@@@@@@@@@#YB@7&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@:7@@P
        #@@^\xa0G@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@YBB5@@@@@@@@@@@@@@@@@@5BP5@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@5\xa0^@@#
        @@&.\xa0:B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@P5@J@@@@@@@@@@@@@@@@@@@@J@YG@@@@@@@@@@@@@@@@@@@@@@@@@@@@@G.\xa0.&@@
        @@#.\xa0\xa0.P@@@@@@@@@@@@@@@@@@@@@@@@@@@JJ@BY@@@@@@@@@@@@@@@@@@@@YB&?5@@@@@@@@@@@@@@@@@@@@@@@@@@@5.\xa0\xa0.#@@
        @@&.\xa0\xa0\xa0\xa0!B@@@@@@@@@@@@@@@@@@@@@@@G^7#BBJ@@@@@@@@@@@@@@@@@@@@JGBB?~B@@@@@@@@@@@@@@@@@@@@@@@G!\xa0\xa0\xa0\xa0.&@@
        #@@^\xa0\xa0\xa0\xa0\xa0\xa0!5#@@@@@@@@@@@@@@@@@BY^\xa0:&@@@PY@@@@@@@@@@@@@@@@@@YP@@@&:\xa0~5#@@@@@@@@@@@@@@@@@#5~\xa0\xa0\xa0\xa0\xa0\xa0^@@#
        P@@7\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0.~?5B#&&@@@&#BGY?~:.:::~YPPBG5#@@@@@@@@@@@@@@#5GG5PJ~::::^!J5GB&&@@@@&#B5?~.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa07@@P
        !@@P\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0.::^:::~?YPB#&&&&&#BPPGGGPPB#&@@@@@@&#BPPBGP55G#&&&&&#BG5J7~::^::.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0P@@!
        \xa0B@@^\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0^JB@@@@@@@@@@@@@@@@&#GPPBBY5GG5YBBG5PG#@@@@@@@@@@@@@@@@#5!\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0^@@B\xa0
        \xa07@@P\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0~P@@@@@@@@@@@@@@@@@@@@@@&G5GY@@@@YGJ5#@@@@@@@@@@@@@@@@@@@@@@#?\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0P@@7\xa0
        \xa0\xa0G@@7\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Y@@@@@@@@@@@@@@@@@@@@@@@@@@@Y~5##5^!#@@@@@@@@@@@@@@@@@@@@@@@@@@B^\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa07@@G\xa0\xa0
        \xa0\xa0:&@&^\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0P@@@@@@@@@@@@@@@@@@@@@@@@@@@@@P\xa0..\xa07@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&~\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0^&@&:\xa0\xa0
        \xa0\xa0\xa0~@@#:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Y@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@5\xa0\xa0~@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#.\xa0\xa0\xa0\xa0\xa0\xa0\xa0:#@@~\xa0\xa0\xa0
        \xa0\xa0\xa0\xa0!@@#^\xa0\xa0\xa0\xa0\xa0\xa0:&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@^\xa0P@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@J\xa0\xa0\xa0\xa0\xa0\xa0^#@@!\xa0\xa0\xa0\xa0
        \xa0\xa0\xa0\xa0\xa0!&@&~\xa0\xa0\xa0\xa0\xa0!@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@!\xa0#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@P\xa0\xa0\xa0\xa0\xa0~&@&!\xa0\xa0\xa0\xa0\xa0
        \xa0\xa0\xa0\xa0\xa0\xa0^B@@J\xa0\xa0\xa0\xa0~@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@!\xa0#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@P\xa0\xa0\xa0\xa0J@@B^\xa0\xa0\xa0\xa0\xa0\xa0
        \xa0\xa0\xa0\xa0\xa0\xa0\xa0.5@@G^\xa0\xa0.#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#.\xa0Y@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@7\xa0\xa0^G@@5.\xa0\xa0\xa0\xa0\xa0\xa0\xa0
        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0!#@@Y.\xa0!@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@7\xa0\xa0.#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@P\xa0.Y@@#!\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0.J&@&?.7@@@@@@@@@@@@@@@@@@@@@@@@@@@@@?\xa0\xa0\xa0\xa0^#@@@@@@@@@@@@@@@@@@@@@@@@@@@@P:?&@&J.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:Y&@&J7B@@@@@@@@@@@@@@@@@@@@@@@@@B~\xa0\xa0\xa0\xa0\xa0\xa0.5@@@@@@@@@@@@@@@@@@@@@@@@@&5J#@&Y:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:J&@&PPB&@@@@@@@@@@@@@@@@@@@@B7\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0~P&@@@@@@@@@@@@@@@@@@@@&BB&@&J:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0.7G@@#GGB#@@@@@@@@@@@@@&BJ~\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:7P#@@@@@@@@@@@@@&###&@@G7.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0^JB@@#GYJJY5PGGP5J7~:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0.^!JYPPGPP5YY5G&@@BJ^\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0^?G&@&BY!^.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0.^7YB&@&G?^\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0.~JG&@@&B5?!^:.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0.:^!?5B&@@&GJ~.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0.^7YP#&@@@&BGP5YJ??7777??JY5PGB&@@@&#PY7^.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0.^!?YPGB#&@@@@@@@@@@&#BGPY?!^.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
        
        Please use 'get-help' to see a list of commands.
        `,
        internet_explorer_warning: "NOTE: I see you're using internet explorer, this website won't work properly.",
        welcome_file_name: "welcome_message.txt",
        invalid_command_message: "<value>: command not found.",
        reboot_message: "Preparing to reboot...\n\n3...\n\n2...\n\n1...\n\nRebooting...\n\n",
        permission_denied_message: "Unable to '<value>', permission denied.",
        sudo_message: "Unable to sudo using a web client.",
        usage: "Usage",
        file: "file",
        file_not_found: "File '<value>' not found.",
        username: "Username",
        hostname: "Host",
        platform: "Platform",
        accesible_cores: "Accessible cores",
        language: "Language",
        value_token: "<value>",
        host: "evandeters.com",
        user: "guest",
        is_root: false,
        type_delay: 0
    };
    return {
        getInstance: function (options) {
            instance === void 0 && (instance = new Singleton(options));
            return instance;
        }
    };
})();

/**
 * Your files here
 */
var files = (function () {
    var instance;
    var Singleton = function (options) {
        var options = options || Singleton.defaultOptions;
        for (var key in Singleton.defaultOptions) {
            this[key] = options[key] || Singleton.defaultOptions[key];
        }
    };
    Singleton.defaultOptions = {
        "About.lnk": "https://me.evandeters.com",
        "Contact.txt": "evan@evandeters.com",
        "Github.lnk": "https://github.com/evanjd711",
        "LinkedIn.lnk": "https://www.linkedin.com/in/evan-deters/",
        "Swift.lnk": "https://www.calpolyswift.org",
        "CPPcyber.lnk": "https://cysec.team"
    };
    return {
        getInstance: function (options) {
            instance === void 0 && (instance = new Singleton(options));
            return instance;
        }
    };
})();

var main = (function () {

    /**
     * Aux functions
     */
    var isUsingIE = window.navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./);

    var ignoreEvent = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    
    var scrollToBottom = function () {
        window.scrollTo(0, document.body.scrollHeight);
    };
    
    var isURL = function (str) {
        return (str.startsWith("http") || str.startsWith("www")) && str.indexOf(" ") === -1 && str.indexOf("\n") === -1;
    };
    
    /**
     * Model
     */
    var InvalidArgumentException = function (message) {
        this.message = message;
        // Use V8's native method if available, otherwise fallback
        if ("captureStackTrace" in Error) {
            Error.captureStackTrace(this, InvalidArgumentException);
        } else {
            this.stack = (new Error()).stack;
        }
    };
    // Extends Error
    InvalidArgumentException.prototype = Object.create(Error.prototype);
    InvalidArgumentException.prototype.name = "InvalidArgumentException";
    InvalidArgumentException.prototype.constructor = InvalidArgumentException;

    var cmds = {
        LS: { value: "ls", gethelp: configs.getInstance().ls_gethelp },
        CAT: { value: "cat", gethelp: configs.getInstance().cat_gethelp },
        WHOAMI: { value: "whoami", gethelp: configs.getInstance().whoami_gethelp },
        DATE: { value: "date", gethelp: configs.getInstance().date_gethelp },
        GETHELP: { value: "get-help", gethelp: configs.getInstance().gethelp_gethelp },
        CLEAR: { value: "clear", gethelp: configs.getInstance().clear_gethelp },
        REBOOT: { value: "reboot", gethelp: configs.getInstance().reboot_gethelp },
        CD: { value: "cd", gethelp: configs.getInstance().cd_gethelp },
        MV: { value: "mv", gethelp: configs.getInstance().mv_gethelp },
        RM: { value: "rm", gethelp: configs.getInstance().rm_gethelp },
        RMDIR: { value: "rmdir", gethelp: configs.getInstance().rmdir_gethelp },
        TOUCH: { value: "touch", gethelp: configs.getInstance().touch_gethelp },
        SUDO: { value: "sudo", gethelp: configs.getInstance().sudo_gethelp }
    };

    var Terminal = function (prompt, cmdLine, output, sidenav, profilePic, user, host, root, outputTimer) {
        if (!(prompt instanceof Node) || prompt.nodeName.toUpperCase() !== "DIV") {
            throw new InvalidArgumentException("Invalid value " + prompt + " for argument 'prompt'.");
        }
        if (!(cmdLine instanceof Node) || cmdLine.nodeName.toUpperCase() !== "INPUT") {
            throw new InvalidArgumentException("Invalid value " + cmdLine + " for argument 'cmdLine'.");
        }
        if (!(output instanceof Node) || output.nodeName.toUpperCase() !== "DIV") {
            throw new InvalidArgumentException("Invalid value " + output + " for argument 'output'.");
        }
        if (!(sidenav instanceof Node) || sidenav.nodeName.toUpperCase() !== "DIV") {
            throw new InvalidArgumentException("Invalid value " + sidenav + " for argument 'sidenav'.");
        }
        if (!(profilePic instanceof Node) || profilePic.nodeName.toUpperCase() !== "IMG") {
            throw new InvalidArgumentException("Invalid value " + profilePic + " for argument 'profilePic'.");
        }
        (typeof user === "string" && typeof host === "string") && (this.completePrompt = "PS C:\\Users\\" + user + ">");
        this.profilePic = profilePic;
        this.prompt = prompt;
        this.cmdLine = cmdLine;
        this.output = output;
        this.sidenav = sidenav;
        this.sidenavOpen = false;
        this.sidenavElements = [];
        this.typeSimulator = new TypeSimulator(outputTimer, output);
    };

    Terminal.prototype.type = function (text, callback) {
        this.typeSimulator.type(text, callback);
    };

    Terminal.prototype.exec = function () {
        var command = this.cmdLine.value;
        this.cmdLine.value = "";
        this.prompt.textContent = "";
        this.output.innerHTML += "<span class=\"prompt-color\">" + this.completePrompt + "</span> " + command + "<br/>";
    };

    Terminal.prototype.init = function () {
        this.sidenav.addEventListener("click", ignoreEvent);
        this.cmdLine.disabled = true;
        this.sidenavElements.forEach(function (elem) {
            elem.disabled = true;
        });
        this.prepareSideNav();
        this.lock(); // Need to lock here since the sidenav elements were just added
        document.body.addEventListener("click", function (event) {
            if (this.sidenavOpen) {
                this.handleSidenav(event);
            }
            this.focus();
        }.bind(this));
        this.cmdLine.addEventListener("keydown", function (event) {
            if (event.which === 13 || event.keyCode === 13) {
                this.handleCmd();
                ignoreEvent(event);
            } else if (event.which === 9 || event.keyCode === 9) {
                this.handleFill();
                ignoreEvent(event);
            }
        }.bind(this));
        this.reset();
    };

    Terminal.makeElementDisappear = function (element) {
        element.style.opacity = 0;
        element.style.transform = "translateX(-300px)";
    };

    Terminal.makeElementAppear = function (element) {
        element.style.opacity = 1;
        element.style.transform = "translateX(0)";
    };

    Terminal.prototype.prepareSideNav = function () {
        var capFirst = (function () {
            return function (string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
        })();
        for (var file in files.getInstance()) {
            var element = document.createElement("button");
            Terminal.makeElementDisappear(element);
            element.onclick = function (file, event) {
                this.handleSidenav(event);
                this.cmdLine.value = "cat " + file + " ";
                this.handleCmd();
            }.bind(this, file);
            element.appendChild(document.createTextNode(capFirst(file.replace(/\.[^/.]+$/, "").replace(/_/g, " "))));
            this.sidenav.appendChild(element);
            this.sidenavElements.push(element);
        }
        // Shouldn't use document.getElementById but Terminal is already using loads of params
        document.getElementById("sidenavBtn").addEventListener("click", this.handleSidenav.bind(this));
    };

    Terminal.prototype.handleSidenav = function (event) {
        if (this.sidenavOpen) {
            this.profilePic.style.opacity = 0;
            this.sidenavElements.forEach(Terminal.makeElementDisappear);
            this.sidenav.style.width = "50px";
            document.getElementById("sidenavBtn").innerHTML = "&#9776;";
            this.sidenavOpen = false;
        } else {
            this.sidenav.style.width = "300px";
            this.sidenavElements.forEach(Terminal.makeElementAppear);
            document.getElementById("sidenavBtn").innerHTML = "&times;";
            this.profilePic.style.opacity = 1;
            this.sidenavOpen = true;
        }
        document.getElementById("sidenavBtn").blur();
        ignoreEvent(event);
    };

    Terminal.prototype.lock = function () {
        this.exec();
        this.cmdLine.blur();
        this.cmdLine.disabled = true;
        this.sidenavElements.forEach(function (elem) {
            elem.disabled = true;
        });
    };

    Terminal.prototype.unlock = function () {
        this.cmdLine.disabled = false;
        this.prompt.textContent = this.completePrompt;
        this.sidenavElements.forEach(function (elem) {
            elem.disabled = false;
        });
        scrollToBottom();
        this.focus();
    };

    Terminal.prototype.handleFill = function () {
        var cmdComponents = this.cmdLine.value.trim().split(" ");
        if ((cmdComponents.length <= 1) || (cmdComponents.length === 2 && cmdComponents[0] === cmds.CAT.value)) {
            this.lock();
            var possibilities = [];
            if (cmdComponents[0].toLowerCase() === cmds.CAT.value) {
                if (cmdComponents.length === 1) {
                    cmdComponents[1] = "";
                }
                if (configs.getInstance().welcome_file_name.startsWith(cmdComponents[1].toLowerCase())) {
                    possibilities.push(cmds.CAT.value + " " + configs.getInstance().welcome_file_name);
                }
                for (var file in files.getInstance()) {
                    if (file.startsWith(cmdComponents[1].toLowerCase())) {
                        possibilities.push(cmds.CAT.value + " " + file);
                    }
                }
            } else {
                for (var command in cmds) {
                    if (cmds[command].value.startsWith(cmdComponents[0].toLowerCase())) {
                        possibilities.push(cmds[command].value);
                    }
                }
            }
            if (possibilities.length === 1) {
                this.cmdLine.value = possibilities[0] + " ";
                this.unlock();
            } else if (possibilities.length > 1) {
                this.type(possibilities.join("\n"), function () {
                    this.cmdLine.value = cmdComponents.join(" ");
                    this.unlock();
                }.bind(this));
            } else {
                this.cmdLine.value = cmdComponents.join(" ");
                this.unlock();
            }
        }
    };

    Terminal.prototype.handleCmd = function () {
        var cmdComponents = this.cmdLine.value.trim().split(" ");
        this.lock();
        switch (cmdComponents[0]) {
            case cmds.CAT.value:
                this.cat(cmdComponents);
                break;
            case cmds.LS.value:
                this.ls();
                break;
            case cmds.WHOAMI.value:
                this.whoami();
                break;
            case cmds.DATE.value:
                this.date();
                break;
            case cmds.GETHELP.value:
                this.gethelp();
                break;
            case cmds.CLEAR.value:
                this.clear();
                break;
            case cmds.REBOOT.value:
                this.reboot();
                break;
            case cmds.CD.value:
            case cmds.MV.value:
            case cmds.RMDIR.value:
            case cmds.RM.value:
            case cmds.TOUCH.value:
                this.permissionDenied(cmdComponents);
                break;
            case cmds.SUDO.value:
                this.sudo();
                break;
            default:
                this.invalidCommand(cmdComponents);
                break;
        };
    };

    Terminal.prototype.cat = function (cmdComponents) {
        var result;
        if (cmdComponents.length <= 1) {
            result = configs.getInstance().usage + ": " + cmds.CAT.value + " <" + configs.getInstance().file + ">";
        } else if (!cmdComponents[1] || (!cmdComponents[1] === configs.getInstance().welcome_file_name || !files.getInstance().hasOwnProperty(cmdComponents[1]))) {
            result = configs.getInstance().file_not_found.replace(configs.getInstance().value_token, cmdComponents[1]);
        } else {
            result = cmdComponents[1] === configs.getInstance().welcome_file_name ? configs.getInstance().welcome : files.getInstance()[cmdComponents[1]];
        }
        this.type(result, this.unlock.bind(this));
    };

    Terminal.prototype.ls = function () {
        var result = ".\n..\n" + configs.getInstance().welcome_file_name + "\n";
        for (var file in files.getInstance()) {
            result += file + "\n";
        }
        this.type(result.trim(), this.unlock.bind(this));
    };

    Terminal.prototype.sudo = function () {
        this.type(configs.getInstance().sudo_message, this.unlock.bind(this));
    }

    Terminal.prototype.whoami = function (cmdComponents) {
        var result = configs.getInstance().username + ": " + configs.getInstance().user + "\n" + configs.getInstance().hostname + ": " + configs.getInstance().host + "\n" + configs.getInstance().platform + ": " + navigator.platform + "\n" + configs.getInstance().accesible_cores + ": " + navigator.hardwareConcurrency + "\n" + configs.getInstance().language + ": " + navigator.language;
        this.type(result, this.unlock.bind(this));
    };

    Terminal.prototype.date = function (cmdComponents) {
        this.type(new Date().toString(), this.unlock.bind(this));
    };

    Terminal.prototype.gethelp = function () {
        var result = configs.getInstance().general_gethelp + "\n\n";
        for (var cmd in cmds) {
            result += cmds[cmd].value + " - " + cmds[cmd].gethelp + "\n";
        }
        this.type(result.trim(), this.unlock.bind(this));
    };

    Terminal.prototype.clear = function () {
        this.output.textContent = "";
        this.prompt.textContent = "";
        this.prompt.textContent = this.completePrompt;
        this.unlock();
    };

    Terminal.prototype.reboot = function () {
        this.type(configs.getInstance().reboot_message, this.reset.bind(this));
    };

    Terminal.prototype.reset = function () {
        this.output.textContent = "";
        this.prompt.textContent = "";
        if (this.typeSimulator) {
            this.type(configs.getInstance().welcome + (isUsingIE ? "\n" + configs.getInstance().internet_explorer_warning : ""), function () {
                this.unlock();
            }.bind(this));
        }
    };

    Terminal.prototype.permissionDenied = function (cmdComponents) {
        this.type(configs.getInstance().permission_denied_message.replace(configs.getInstance().value_token, cmdComponents[0]), this.unlock.bind(this));
    };

    Terminal.prototype.invalidCommand = function (cmdComponents) {
        this.type(configs.getInstance().invalid_command_message.replace(configs.getInstance().value_token, cmdComponents[0]), this.unlock.bind(this));
    };

    Terminal.prototype.focus = function () {
        this.cmdLine.focus();
    };

    var TypeSimulator = function (timer, output) {
        var timer = parseInt(timer);
        if (timer === Number.NaN || timer < 0) {
            throw new InvalidArgumentException("Invalid value " + timer + " for argument 'timer'.");
        }
        if (!(output instanceof Node)) {
            throw new InvalidArgumentException("Invalid value " + output + " for argument 'output'.");
        }
        this.timer = timer;
        this.output = output;
    };

    TypeSimulator.prototype.type = function (text, callback) {
        if (isURL(text)) {
            window.open(text);
        }
        var i = 0;
        var output = this.output;
        var timer = this.timer;
        var skipped = false;
        var skip = function () {
            skipped = true;
        }.bind(this);
        document.addEventListener('dblclick', skip);
        (function typer() {
            if (i < text.length) {
                var char = text.charAt(i);
                var isNewLine = char === "\n";
                output.innerHTML += isNewLine ? "<br/>" : char;
                i++;
                if (!skipped) {
                    setTimeout(typer, isNewLine ? timer * 2 : timer);
                } else {
                    output.innerHTML += (text.substring(i).replace(new RegExp("\n", 'g'), "<br/>")) + "<br/>";
                    document.removeEventListener("keyup", skip);
                    callback();
                }
            } else if (callback) {
                output.innerHTML += "<br/>";
                document.removeEventListener("Space", skip);
                callback();
            }
            scrollToBottom();
        })();
    };

    return {
        listener: function () {
            new Terminal(
                document.getElementById("prompt"),
                document.getElementById("cmdline"),
                document.getElementById("output"),
                document.getElementById("sidenav"),
                document.getElementById("profilePic"),
                configs.getInstance().user,
                configs.getInstance().host,
                configs.getInstance().is_root,
                configs.getInstance().type_delay
            ).init();
        }
    };
})();

window.onload = main.listener;
