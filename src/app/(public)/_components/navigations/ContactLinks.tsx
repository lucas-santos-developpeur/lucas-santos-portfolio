import React from "react";

const ContactLinks: React.FC<{ contact: any }> = ({ contact }) => {
  return (
    <a
      href={contact.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
    >
      {contact.icon}
      <span className="text-gray-800 dark:text-gray-200">{contact.name}</span>
    </a>
  );
};

export default ContactLinks;
