<?php oed_helpers::get_template_parts( array('_parts/html-header') ); ?>

<?php get_template_part('_parts/landing/menu'); ?>

<div id="stats">
  <h1><span data-bind="percentage"></span>%</h1>
  <h2>
    <span data-bind="filteredCount"></span> de <span data-bind="totalCount"></span> entidades
  </h2>
  <h3>atendem aos critérios selecionados</h3>
</div>

<dialog id="entity-details">
  <h1 data-bind="nome"></h1>
  I'm a dialog!
  <form method="dialog">
    <input type="submit" value="Fechar">
  </form>
</dialog>

<?php oed_helpers:: get_template_parts( array('_parts/html-footer') ); ?>
