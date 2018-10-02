const isMod = event => (event.metaKey && !event.ctrlKey) || event.ctrlKey;

export default isMod