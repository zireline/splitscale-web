
pipeline {
    agent any

    stages {
        stage('initialize') {
          steps {
            sh 'npm -v'
            sh 'git --version'
            sh 'docker -v'
            sh 'export NODE_ENV=production'
          }
        }

        stage('pull') {
          steps {
            checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/splitscale/splitscale-web.git']]])
          }
        }

        stage('install') {
          steps {
            script {
              sh 'npm install'
            }
          }
        }

        stage('build') {
          steps {
            script {
              sh 'npm run build'
            }
          }
        }

        
        stage('build docker image') {
          steps {
            sh 'docker build -t kasutu/splitscale-web:latest .'
          }
        }

        stage('deploy') {
          steps {
            script {
              try {
                runServer()
              } catch (Exception e) {
                sh 'docker stop splitscale-web'
                sh 'docker rm splitscale-web'
                runServer()
              }
            }
          }
        }
    }
}

def runServer() {
  sh 'docker run --name splitscale-web -p 8000:3000 -d --restart=on-failure kasutu/splitscale-web:latest'
}
