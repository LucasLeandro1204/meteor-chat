import './avatar.html';

const colors = [
  'indigo', 'red', 'pink', 'blue', 'green', 'yellow',
];

const getColor = (string) => {
  const length = string.length;
  // const sum = string.split('').reduce((sum, current) => sum + current.charCodeAt(0), 0);
  let sum = 0;
  
  for (let i = 0; i < length; i++) {
    sum += string.charCodeAt(i);
  }
  
  const average = sum / length;

  return colors[average % colors.length];
};

window.getColor = getColor;

const getInitials = (string, fallback = 'A') => {
  const sanitized = string.replace(/[^a-z]/gi, '').toUpperCase();
  
  if (sanitized.length < 1) {
    return fallback;
  }

  const splited = sanitized.split(' ');
  const first = splited[0].charAt(0);
  const last = (splited[splited.length] || '').charAt(0);

  return first + last;
};

Template.Avatar.onCreated(function () {
  this.autorun(() => {
    const initials = getInitials(this.data.text);
    const color = getColor(initials);

    console.log(this);
    
    this.data.class = `bg-${color}-light text-${color}-dark ${this.data.classes}`;
  });
});

Template.Avatar.helpers({
  initials() {
    const instance = Template.instance();

    console.log(Template);

    return getInitials(instance.data.text);
  },
});