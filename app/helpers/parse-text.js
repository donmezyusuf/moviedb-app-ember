import { helper } from '@ember/component/helper';

export default helper(function parseText(params/*, hash*/) {
  let text = params[0];
  let textArray = text.split(' ');
  textArray = textArray.slice(0, 20);
  return textArray.join(' ') + "...";
});
