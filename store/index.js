export const state = () => ({
  currentPourcentage: 50,
  records: [
    {
      slug: 'deadlift',
      name: 'Deadlift',
      type: 'w',
      record: 190
    },
    {
      slug: 'clean',
      name: 'Clean',
      type: 'w',
      record: 120
    },
    {
      slug: 'snatch',
      name: 'Snatch',
      type: 'w',
      record: 105
    },
    {
      slug: 'squat',
      name: 'Squat',
      type: 'w',
      record: 140
    },
    {
      slug: 'jerk',
      name: 'Jerk',
      type: 'w',
      record: 120
    },
    {
      slug: 'c2b',
      name: 'Chest To Bar',
      type: 'r',
      record: 120
    }
  ]
})

export const getters = {
  getMouvementFromSlug: (state) => (slug) => {
    return state.records.find((movement) => movement.slug === slug)
  }
}

export const mutations = {
  SET_CURRENT_POURCENTAGE(state, payload) {
    state.currentPourcentage = parseInt(payload)
  }
}
