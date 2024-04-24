const { quote } = require("./quote")

async function main() {
    quote()
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
