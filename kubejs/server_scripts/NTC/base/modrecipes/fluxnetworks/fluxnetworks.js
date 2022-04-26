onEvent('recipes', e => {

  modifyShaped(e, 'fluxnetworks:basic_flux_storage', 1, ['BBB', 'GXG', 'BBB'], {
    B: 'fluxnetworks:flux_block',
    G: '#forge:glass_panes',
    X: 'thermal:energy_cell'
  })

  modifyShaped(e, 'fluxnetworks:flux_block', 1, ['FCF', 'CXC', 'FCF'], {
    C: 'fluxnetworks:flux_core',
    F: 'fluxnetworks:flux_dust',
    X: 'thermal:rf_potato'
  })

})
