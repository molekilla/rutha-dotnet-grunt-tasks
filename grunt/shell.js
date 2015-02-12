//var colors = require('colors');
module.exports = function (grunt, options) {
  
//console.log('*** Requires rutha_deploy (https://github.com/molekilla/rutha_deploy) ***'.underline.yellow);
//  console.log('*** Requires Ansible (http://docs.ansible.com/intro_installation.html) ***'.underline.yellow);
        
  if (!options.deploySettings) {
    grunt.log.warn('Missing deploySettings');
    return;
  }
  if (!options.deploySettings.playbook) {
    grunt.log.warn('Missing deploySettings.playbook');
    return;
  }    
//  if (!options.deploySettings.sshKey) {
//    grunt.log.warn('Missing deploySettings.sshKey');
//    return;
//  }    
//  if (!options.deploySettings.remoteUser) {
//    grunt.log.warn('Missing deploySettings.remoteUser');
//    return;
//  }
  if (!options.deploySettings.hosts) {
    grunt.log.warn('Missing deploySettings.hosts');
    return;
  }


  var scripts = {
    vagrant: {
      command: "PYTHONUNBUFFERED=1 ANSIBLE_FORCE_COLOR=true ANSIBLE_HOST_KEY_CHECKING=false ANSIBLE_SSH_ARGS='-o UserKnownHostsFile=/dev/null -o ForwardAgent=yes -o ControlMaster=auto -o ControlPersist=60s' ansible-playbook --private-key=" + options.deploySettings.ruthaDeploy + "/.vagrant/machines/default/virtualbox/private_key --user=" + options.deploySettings.hosts.vagrant.remoteUser + ' --extra-vars "target_host=' + options.deploySettings.hosts.vagrant.name + '"' + " --connection=ssh --limit='default' --inventory-file=" + options.deploySettings.ruthaDeploy + "/.vagrant/provisioners/ansible/inventory --sudo -v " + options.deploySettings.playbook
    },
    deploy: {
      command: 'ansible-playbook ' + options.deploySettings.playbook + ' --private-key ' + options.deploySettings.hosts.production.sshKey + ' --sudo' + ' -u ' + options.deploySettings.hosts.production.remoteUser + ' --extra-vars "target_host=' + options.deploySettings.hosts.production.name + '"'
    },
    staging: {
      command: 'ansible-playbook ' + options.deploySettings.playbook + ' --private-key ' + options.deploySettings.hosts.staging.sshKey + ' --sudo' + ' -u ' + options.deploySettings.hosts.staging.remoteUser + ' --extra-vars "target_host=' + options.deploySettings.hosts.staging.name + '"'
    },
    postinstall: {
      command: 'node node_modules/protractor/bin/webdriver-manager update'
    }
  };
  
  if (process.env.NODE_ENV === 'production') {
    // do nothing
    scripts['postinstall'] = {
      command: 'pwd'
    };
  }

    
  return scripts;
};