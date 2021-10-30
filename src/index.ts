import falkor from "@falkor/falkor-library";

// extend Task
class ExampleTask extends falkor.Task {
    constructor() {
        super(
            // name of the current sequence batch
            "Task Example",
            // *optional* global command-line dependencies
            {
                // lazy shorthand syntax
                git: "2.33.0"
                /*,
                // below dependency object is the equivalent of "12.0.0" (lazy shorthand syntax string, like above)
                // this is *exactly* how the library unfolds shorthand dependencies
                // @see TaskRunner::mergeDependencies
                "clang++": {
                    command: "clang++ --version",
                    minVersion: "12.0.0",
                    versionMatch: /version\s*([^\s]+)/
                }
                */
            }
        );
    }

    // necessary implementation of abstract async function (entry point)
    public async run(argv?: { [key: string]: string }): Promise<void> {
        // template literal tags can also be used to format messages since v1.0.0-beta.3
        const T = this.theme.tagger;
        this.logger.info(`[!] Tagged ${T.scs`template literal`} ${T.pth`support`}!`);

        // CLI arguments can be passed to individual plugins since v1.0.0-beta.5
        // argv is a parsed minimist CLI argument object, see @falkor/falkor-commander for details
        this.logger.info(`CLI arguments for plugin: ${JSON.stringify(argv)}`);

        // asynchronous command-line execution
        // (command output is handled by library)
        const fetchResult = await this.exec(
            "git fetch --all --tags"
            /*, {
                // current working directory for command
                cwd: "../falkor-library"
            }*/
        );
        // the library does not throw errors (apart in setup stage), once running it only reports failure(s)
        if (!fetchResult.success) {
            // built in method, that *throws* library acceptable error
            // (reducing state to PANIC, allowing task level synchronous clean-up, then exiting with non-zero exit code)
            this.error("failed fetch");
        }

        /*
        const commitResult = await this.exec("git commit", {
            cwd: "../falkor-library",
            // exceptions are silenced, when output is tested positive for any of these *optional* regular expressions
            noError: [/nothing to commit, working tree clean/, /no changes added to commit/]
        });
        if (!commitResult.success) {
            this.error("failed commit");
        }
        */

        // request input from the user
        const answer1 = await this.ask(
            // the text of the "question" is necessary
            "try selection:",
            {
                // if answers are provided, the input will be tested against them
                answers: ["node", "python", "erlang", "go", "php", "lisp", "fortran"],
                // forces answer items to be displayed line-by-line
                // (this also makes them selectable by answer number-, or interactively)
                list: true
            }
        );
        if (answer1 === null) {
            // currently this can only happen after predefined number of wrong answers, or after timeout
            this.error("failed input");
        }

        // allows multiple selection (separated by commas, or by interactive input)
        const answer2 = await this.ask("try multi-selection:", {
            // if answers are provided, the input will be tested against them
            answers: ["node", "python", "erlang", "go", "php", "lisp", "fortran"],
            // forces answer items to be displayed line-by-line
            // (this also makes them selectable by answer number-, or interactively)
            list: true,
            // if answers are provided, this will allow multiple selection
            // (with- or without list mode)
            multi: true
        });
        if (answer2 === null) {
            this.error("failed input");
        }

        // the logger instance is used to display formatted data throughout the batch
        this.logger
            // new prompt for all further logs, newlines in logs will be indented with same length whitespace
            .pushPrompt("[NIRVANA]")
            // level of output is based on configuration, one can use:
            // debug(), notice(), info(), warning(), error(), fatal()
            .info("luv' this band")
            // prompts also support internal ansi color sequence(s) - if underlying terminal does too
            .pushPrompt(T.trc`nevermind`)
            // (level of output can be overridden in the '.ops.json' file in project root)
            .info(
                // inline styling of log chunks is always done through the theme
                this.theme.formatSuccess(
                    // ascii is a new addition, currently it creates lists, and ascii figlet fonts
                    // (newlines are padded correctly by library, extra one added to the end for readability)
                    this.ascii.font("I'm done", "Big")
                )
            )
            // discard the last two demonstrational prompts
            .popPrompt(2);
    }

    // optional *synchronous* error & abort handler
    public cancel(isAbort: boolean): void {
        this.logger.info(
            `${this.theme.formatTask(this.id)} executing cancel method ${this.theme.formatTrace(
                isAbort ? "(abort)" : "(error)"
            )}`
        );
    }
}

export default new ExampleTask();
