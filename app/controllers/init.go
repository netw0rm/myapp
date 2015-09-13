package controllers

import "github.com/revel/revel"
import _ "github.com/mattn/go-sqlite3"

func init() {
	revel.OnAppStart(InitDB)

	revel.InterceptMethod((*XOrmController).Begin, revel.BEFORE)
	revel.InterceptMethod((*XOrmTnController).Begin, revel.BEFORE)
	revel.InterceptMethod((*XOrmTnController).Commit, revel.AFTER)
	revel.InterceptMethod((*XOrmTnController).Rollback, revel.PANIC)
}
