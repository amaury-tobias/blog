workflow "Build and Deploy Pages" {
  resolves = ["Build", "Deploy Pages"]
  on = "push"
}

action "Build" {
  uses = "actions/setup-node@v1"
  runs = "npm run generate"
}

action "Deploy Pages" {
  uses = "sebastianpopp/git-ftp-action@1.0.0"
  secrets = ["FTP_PWD", "FTP_USER"]
  env = {
    FTP_DEST = "ftp://demo.wftpserver.com/upload"
  }
  needs = ["Build"]
}
