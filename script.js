// JavaScript for Dark Mode Toggle and Button Actions
document.addEventListener('DOMContentLoaded', () => {
    const darkModeButton = document.getElementById('darkModeButton');
    const page = document.getElementById('page');
    const openButton = document.getElementById('open-button');
    const replyButton = document.getElementById('reply-button');
    const markButton = document.getElementById('mark-button');
    const inboxMessage = document.getElementById('inbox-message');
    const inboxRead = document.getElementById('inbox-read');
    const inboxHeading = document.getElementById('inbox-heading');
    const senderName = document.getElementById('sender');
    const actionButtons = document.getElementById('action-buttons');
    const closeMessage = document.getElementById('close');
    const cancelButton = document.getElementById('cancel-button');
    const sendButton = document.getElementById('send-button');
    const replyMessage = document.getElementById('reply-message');
    const inbox = document.getElementById('inbox');
  
    // Toggle Dark Mode
    darkModeButton.addEventListener('click', () => {
      page.classList.toggle('dark-mode');
      darkModeButton.classList.toggle('is-dark');
    });
  
    // Show Inbox Message on 'Open'
    openButton.addEventListener('click', () => {
      inboxMessage.classList.remove('hidden');
      inboxRead.classList.add('hidden');
      openButton.disabled = true;
      replyButton.disabled = false;
      markButton.disabled = false;
      actionButtons.classList.remove('hidden');
    });
  
    // Show Reply Section
    replyButton.addEventListener('click', () => {
      replyMessage.classList.remove('hidden');
      actionButtons.classList.add('hidden');
      openButton.disabled = true;
      replyButton.disabled = true;
      markButton.disabled = true;
    });
  
    // Close Message
    closeMessage.addEventListener('click', () => {
      inboxMessage.classList.add('hidden');
      inboxRead.classList.remove('hidden');
      openButton.disabled = false;
      replyButton.disabled = false;
      markButton.disabled = false;
      actionButtons.classList.add('hidden');
    });
  
    // Cancel Reply
    cancelButton.addEventListener('click', () => {
      replyMessage.classList.add('hidden');
      actionButtons.classList.remove('hidden');
      openButton.disabled = false;
      replyButton.disabled = false;
      markButton.disabled = false;
    });
  
    // Send Reply
    sendButton.addEventListener('click', () => {
      alert('Message Sent!');
      replyMessage.classList.add('hidden');
      actionButtons.classList.remove('hidden');
      openButton.disabled = false;
      replyButton.disabled = false;
      markButton.disabled = false;
    });
  
    // Toggle Read Status
    markButton.addEventListener('click', () => {
      inboxMessage.classList.add('hidden');
      inboxRead.classList.remove('hidden');
    });
  });
  