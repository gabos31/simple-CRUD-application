export default (router) => {
  router.get('root', '/', (ctx) => {
    ctx.render('pages/index');
  });
};
