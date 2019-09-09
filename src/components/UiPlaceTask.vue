<template>
  <div class="ui-place-task">
    <div v-bind:class="'uk-card uk-card-default uk-card-hover uk-card-body'">
      <div class="ui-place-heading">
        <h3 class="uk-card-title">Hello</h3>
        <div class="ui-control">
          <div class="uk-inline">
            <button type="button" class="ui-button-reset">
              <span uk-icon="more-vertical"></span>
            </button>
            <div uk-dropdown="mode: click">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
          </div>
        </div>
      </div>
      <div class="ui-place-body">
        <div class="ui-well">
          <p>2) On search the date, pls make it more simple, to select the date.</p>
        </div>
        <div class="ui-well">
          <p>2) On search the date, pls make it more simple, to select the date.</p>
        </div>
        <div class="ui-well">
          <p>2) On search the date, pls make it more simple, to select the date.</p>
        </div>
        <div class="ui-well">
          <p>2) On search the date, pls make it more simple, to select the date.</p>
        </div>
      </div>
      <div class="ui-place-footer">
        <div class="ui-well">
          <a href="">Add a Card</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiPlaceTaskComponent'
}
</script>

<style lang="scss" scoped>
  .ui-place-task {
    width: 25%;

    > .uk-card {
      padding: 12px;
      border-radius: 5px;

      > .ui-place-heading {
        margin-bottom: 8px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        > .uk-card-title {
          margin: 0;
          font-size: 20px;
          font-weight: bold;
        }

        .ui-button-reset {
          border: none;
          cursor: pointer;
          padding: 0;

          &:focus {
            outline: thin dotted;
            outline-offset: -2px;
          }
        }
      }

      .ui-place-body {
        width: 100%;

        > .ui-well {
          background-color: #4f617d;
          margin: 0;
          color: #ffffff;
          border-radius: 5px;
          padding: 8px;
          margin-bottom: 8px;
          font-size: 15px;
          cursor: pointer;

          > p {
            margin: 0;
          }
        }
      }
    }
  }
</style>
