<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            タイトル
          </th>
          <th scope="col">
            期限
          </th>
          <th scope="col" />
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in allList"
          :key="item.id"
        >
          <th scope="row">
            {{ item.id }}
          </th>
          <td>{{ item.title }}</td>
          <td>{{ item.time_limit }}</td>
          <td>
            <button
              v-if="item.status === 'doing'"
              type="button"
              class="btn btn-success"
              @click="done(item.id)"
            >
              <i class="material-icons">
                done
              </i>
            </button>
            <button
              v-else
              type="button"
              class="btn btn-warning"
              @click="doing(item.id)"
            >
              <i class="material-icons">
                reply
              </i>
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="edit(item)"
            >
              <i class="material-icons">
                edit
              </i>
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="del(item.id)"
            >
              <i class="material-icons">
                delete
              </i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters('todoList', ['allList']),
  methods: {
    done (id) {
      this.$emit('done', id)
    },
    doing (id) {
      this.$emit('doing', id)
    },
    edit (item) {
      this.$emit('editOpen', item)
    },
    del (id) {
      this.$emit('del', id)
    }
  }
}

</script>
