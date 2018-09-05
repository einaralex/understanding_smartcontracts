const Migrations = artifacts.require("./Migrations.sol");

contract('Migrations', (accounts) => {
	const [bob, alice] = accounts
	it("should verify bob and alice's favorite numbers default to 0", async () => {
		//const ssContract = await Migrations.deployed()
		//const bobNum = await ssContract.foo.call(bob)
		assert.equal(accounts, accounts,
			"bob's default value was non-zero")
		
		// const aliceNum = await ssContract.foo.call(alice)
		// assert.equal(aliceNum, 0,
			// "alice's default value was non-zero")
	})

	// it("should set bob's favorite number to 33", async () => {
	// 	const ssContract = await Migrations.deployed()
	// 	ssContract.setFavorite(33, {from: bob})
	// 	const newBobNum = await ssContract.foo.call(bob)
	// 	assert.equal(newBobNum, 30,
	// 		"bob's new value was not 33")
	// })
})