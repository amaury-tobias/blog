workflow "Build and Deploy Pages" {
  on = "push"
  resolves = ["Build", "Deploy Pages"]
}

action "Build" {
  uses = "actions/setup-node@v1"
  run = "npm run generate"
}

action "Deploy Pages" {
  uses = "sebastianpopp/git-ftp-action@1.0.0"
  secrets = ["FTP_PWD", "FTP_USER"]
  env = {
    FTP_DEST = "ftp://demo.wftpserver.com/upload"
  }
  needs = ["Build"]
}
