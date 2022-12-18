<script>
  import { Card, CardText, CardActions, Button, MaterialApp } from 'svelte-materialify';
</script>

<div class="content mt-4 mb-4">
  <Card class="cyan lighten-3" shaped  hover style="max-width:300px">
    <div class="pl-4 pr-4 pt-3">
      <span class="text-overline"> OVERLINE </span>
      <br />
      <span class="text-h5 mb-2">Headline</span>
      <br />
    </div>
    <CardText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, qui quaerat
      rerum incidunt nisi ducimus?
    </CardText>
    <CardActions>
      <Button rounded outlined>Button</Button>
    </CardActions>
  </Card>
</div>

<style>
.content{
  display:flex;
  align-items:center;
}
</style>
